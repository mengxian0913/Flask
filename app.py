import requests
from bs4 import BeautifulSoup as bs

url = ""
response = requests.get(url)
soup = bs(response.content, "html.parser")
img_tags = soup.find_all("img")
img_urls = [img["src"] for img in img_tags]
import json
import html

for i in img_urls:
    print(i)

json_imgs = json.dumps(img_urls, ensure_ascii=False)

from flask import Flask
from flask import render_template
from flask import jsonify

app = Flask(__name__)
app = Flask(__name__, static_folder='static')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/<page>')
def page(page):
    return render_template(page, imgs = json_imgs)


if __name__ == '__main__':
    app.debug = True
    app.run(port=5001)