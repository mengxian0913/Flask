import requests
from bs4 import BeautifulSoup as bs

url = "https://pic.sogou.com/pic/searchList.jsp?statref=searchlist_hintword_up&keyword=%E8%9C%A1%E7%AC%94%E5%B0%8F%E6%96%B0%E5%9B%BE%E7%89%87%E5%A4%B4%E5%83%8F%E5%8F%AF%E7%88%B1&spver=0"
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