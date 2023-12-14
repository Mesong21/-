import requests
from bs4 import BeautifulSoup
from pyecharts import options as opts
from pyecharts.charts import Page, WordCloud
from pyecharts.globals import SymbolType
import matplotlib.pyplot as plt
from lxml import etree

# 获取百度热搜榜的网页内容
url = "https://top.baidu.com/board?platform=wise"
response = requests.get(url)
# 将text导出至文件
# with open('./results/response.html', 'w', encoding='utf-8') as f:
#   f.write(response.text)
soup = BeautifulSoup(response.text, 'html.parser')
# 提取出热搜词条和它们的排名
# 使用CSS选择器获取元素
elements = soup.select('div.row-start-center.zkwvwdF0VfxBzs7BSEZ1A div._2iegwST7utDAJiwI_rZCXM > span')
hot_searches = {}
for i, element in enumerate(elements, 1):
  if i > 20:  # 只需要前20个热搜词条
    break
  hot_searches[element.contents[0]] = 21 - i  # 排名越高，权重越大


# 生成词云

wordcloud = WordCloud()
wordcloud = WordCloud(init_opts=opts.InitOpts(width='1000px', height='1000px'))
wordcloud.add("", hot_searches.items(), word_size_range=[10, 40])
wordcloud.set_global_opts(title_opts=opts.TitleOpts(title="Baidu Hot Searches"))
wordcloud.render("./exp2/results/hot_searches.html")