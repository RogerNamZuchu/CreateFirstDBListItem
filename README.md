# CreateNodeJS

# Step1 : Download Node & Npm

https://nodejs.org/en/download/

# Step2 : Tạo Folder ở đâu đó rồi mở VsCode lên rồi open folder. Open internal terminal rồi Tạo NPM
```
npm init
```

# Step3 : 

package name: (firstserver) firstserver

version: (1.0.0) 1

Invalid version: "1"

version: (1.0.0) 1.0.0

description: First Server

entry point: (index.js) app.js

test command: 

git repository: https://github.com/RogerNamZuchu/CreateNodeJS.git

keywords: First Server

author: NamZuchu

license: (ISC)  

# Step4 : Cài đặt Express ở terminal để có công cụ nodejs ok
```
npm install express
```

# Step5 : Tạo file tên app.js giống như entry point rồi paste cấu hình này vô
```
const app = require("express")();
const server = require("http").createServer(app);

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`app lisntening at ${PORT}`);
});
```

Sử dụng node app.js để chạy file


# Step5 : Sử dụng autosave ở File > AutoSave để tự động lưu file

# Step6 : Cài đặt Nodemon để sử dụng chức năng auto reload server nếu có thay đổi
```
npm i nodemon
```

# Step7 : Vô file package.json để config lại cách chạy. Tìm 
<img width="466" alt="image" src="https://user-images.githubusercontent.com/108333173/176154081-bd4c200c-238e-4061-b004-94522483839f.png">
rồi add vào


```
"start": "nodemon app.js",
```

<img width="449" alt="image" src="https://user-images.githubusercontent.com/108333173/176154219-61553f90-91d0-4f36-bc28-f1d5b30cf068.png">

Sau đó chạy lệnh npm start để run folder và thử xoá hết trong file app.js để thấy sự thay đổi
