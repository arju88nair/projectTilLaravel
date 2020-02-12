from __future__ import unicode_literals

import json
import requests

from flask import Flask

app = Flask(__name__)

@app.route('/')
def show_quotes():
    params = {
        'spider_name': 'til',
        'start_requests': True
    }
    response = requests.get('http://localhost:9080/crawl.json', params)
    data = json.loads(response.text)
    result = '\n'.join('<p><b>{}</b> - {}</p>'.format(item['author'], item['text'])
                       for item in data['items'])
    return result