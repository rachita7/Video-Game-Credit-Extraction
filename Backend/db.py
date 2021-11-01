from flask import Flask
from flask_pymongo import pymongo, MongoClient
from main import app

client = MongoClient('mongodb://localhost:27017/') 

db = client.get_database('flask_mongodb_atlas')
user_collection = pymongo.collection.Collection(db, 'user_collection')
