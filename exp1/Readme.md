# exp1

1. (论述题)
一、实验目的

1. 了解matplotlib库实现数据可视化的方法；

2. 了解折线图、直方图、柱状图和饼图的绘制方法；

3. 了解多子图数据的绘制方法。

二、实验内容

1. 利用折线图和散点图绘制excel文件中data_history对应的数据（按日期的新冠疫情数据），要求分别在折线图和散点图上显示confirm，dead和heal数据，使用不同的视觉通道（样式、颜色等）。

注意：（1）中文标注的使用；

      （2）xticks和yticks对坐标轴的处理。

思考：哪一个图更为有效？
折线图


2. 利用饼图绘制excel文件中data_world对应的数据（各国新冠疫情数据），要求显示确诊人数最多的前4个国家的分布饼图，展示confirm，dead、heal和suspect的数据构成。



3. 利用直方图和条形图绘制excel文件中current_prov对应的数据（各省新冠疫情数据），要求使用多个子图，使用合适的视觉通道。其中条形图要求同时展示示confirm，dead和heal数据，即每个省3个柱子，可以堆叠也可以不堆叠。

思考：哪一个图更为有效？
条形图


三、参考信息

1.  Matplotlib.pptx：包含了matplotlib库的基本使用方法；

2.  covid19_data.xls：绘制图形使用的数据集；

3.  百度；

4. 可能使用的库

（1）Matplotlib库；

（2）pandas库，xlrd模块：读取excel文件中的数据；

（3）jupyter notebook：推荐使用的python IDE环境。



四：提交内容

(1)python源码（三段代码，或者放在一个文件里面）。

(2)可视化界面截图。