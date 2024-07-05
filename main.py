from flask import Flask, render_template,request,jsonify
import pickle
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow import keras
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Embedding, LSTM, Dense
from tensorflow.keras.models import load_model
import numpy as np

app = Flask(__name__)
labels = {'Angry': 1,
'Full of Fear': 2,
'Full of Joy': 3,
'In a Loving Mood': 4,
'Sad': 5,
'Surprise': 6}

model = model = load_model('emotion_model.h5')





@app.route('/')
def Homepage():
    return render_template('index.html')



@app.route('/predict')
def prediction():
    return render_template('predict.html')

@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/submit',methods=['POST'])
def submit():
    text = request.form['test']
    prediction = prediction_emotion(text)
    return jsonify({'text':text,'predict':prediction})

    
def prediction_emotion(text):
    with open('tokenizer.pkl','rb') as f:
        tokenizer = pickle.load(f)
        text=tokenizer.texts_to_sequences([text])
        text_padded = pad_sequences(text, maxlen = 66, padding='pre')
        predict =model.predict(text_padded)
        arg=np.argmax(predict[0])+1
        for key in labels:
            if labels[key]==arg:
                print (key)
                return key







if __name__ == '__main__':
    app.run(debug=True)