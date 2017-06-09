# upFile
node，图片上传

话说我还是不建议 Node 服务器来储存文件，我计算过服务器宽带费用和CSDN一起使用比七牛云存储还贵，所以我们还是用七牛； 我们前端把文件存到七牛后，然后把 url 发送到我们服务器。这样解耦，费用也不高。

app.js

```
var fs = require('fs');
var express = require('express');
var multer = require('multer')

var app = express();
var upload = multer({
    dest: 'upload/'
});

// 单图上传
//multer有single()中的名称必须是表单上传字段的name名称。
app.post('/upload', upload.single('logo'), function(req, res, next) {
    
    var file = req.file;
    console.log('文件类型：%s', file.mimetype);
    console.log('原始文件名：%s', file.originalname);
    console.log('文件大小：%s', file.size);
    console.log('文件保存路径：%s', file.path);

    res.send({
        ret_code: '0'
    });
});

app.get('/form', function(req, res, next) {
    var form = fs.readFileSync('./form.html', {
        encoding: 'utf8'
    });
    res.send(form);
});

app.listen(3000);
```
form.html

```
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<title>上传图片</title>

</head>

<body>
	<form action="/upload" method="post" enctype="multipart/form-data">
		<h2>单图上传</h2>
		<input type="file" name="logo">
		<input type="submit" value="提交">
	</form>
</body>

</html>

```

- 运行服务。
- node app.js
- 访问 http://127.0.0.1:3000/form ，选择图片，点击“提交”，done。然后，你就会看到 upload 目录下多了个图片。

项目地址：https://github.com/liangtongzhuo/upFile

- 详情：http://www.cnblogs.com/chyingp/p/express-multer-file-upload.html
- 详情：https://cnodejs.org/topic/564f32631986c7df7e92b0db




