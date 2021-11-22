# Welcome to Aprycot Restaurant


## Available Scripts

To use this project, run the following commands:

#### `git clone https://github.com/huuthotn01/restaurant-management.git`

Clone the project to your machine. The default branch `master` will be cloned. For cloning all existing branches, continue with command: `git fetch --all`.

#### `cd restaurant-management`

Navigate to the cloned directory.

#### `npm install`

Install neccessary packages listed in [package.json](package.json) for server side.

#### `cd client && npm install`

Navigate to `client` folder and install neccessary packages listed in [package.json](client/package.json) for client side.

### Development build

If you want to run in development mode, run the following commands (assume you are in `client` folder after the previous command):

#### `npm start`

Start the project. A new browser tab for the project will be opened at `localhost`. Port number is platform-specific, default value is 3000. Development mode provide `hot reloading` - any change in code now will be automatically updated to your website.

The project contains server-side works. To run the project with server, open a new terminal in the project root directory and run the following command:

#### `cd server && node server.js`

The command navigates into `server` folder and start the NodeJS server with default port 5000. The connection from React client side to Node server side is defined with `proxy` key in [client/package.json](client/package.json).

### Production build

You may want to run the project in production build. To do this, navigate to the root directory and run the following commands:

#### `npm run build`

This command will build the project into uglified and minimized files which is run on client's machines.\
The build process is defined in [script field](package.json), involving install neccessary packages and build the React code.

#### `npm run start`

Run the project after building. Now your app will be in production mode. There is no hot reloading, and any changes in code have to be built again. The port number of the website will be shown on terminal (default value is 5000), access `localhost` with given port number to use the project.

## Available Features

The project contains the following features:

    - Login: including sign in, sign up and modify account infomation. 
    - Table services: including table reservation and table cancellation.
    - Food ordering.
    - Payment: after ordering food.
    - Management: for admin/manager only. This feature includes order management, customer management, staff managemenet and menu management.

For detailed flows and usages of available features, refer to [User Manual](/document/UserManual/UserManual.pdf)


====================================


# Chào mừng đến với Nhà hàng Aprycot


## Các câu lệnh khả dụng

Để chạy ứng dụng, sử dụng các câu lệnh sau:

#### `git clone https://github.com/huuthotn01/restaurant-management.git`

Clone code của ứng dụng về máy. Nhánh mặc định được clone về là `master`. Để clone về tất cả các branch hiện có, chạy tiếp lệnh: `git fetch --all`.

#### `cd restaurant-management`

Vào thư mục vừa clone.

#### `npm install`

Cài đặt các package cần thiết cho phía server đã được liệt kê ra ở file [package.json](package.json).

#### `cd client && npm install`

Di chuyển vào thư mục `client` và cài đặt các package cần thiết cho phía client đã được liệt kê ra ở file [package.json](client/package.json).

### Chế độ phát triển (Development)

Nếu bạn muốn chạy ứng dụng trong chế độ phát triển, sử dụng các câu lệnh sau (giả sử bạn vẫn đang ở trong thư mục `client` sau câu lệnh trên):

#### `npm start`

Khởi động ứng dụng. Một trang mới của trình duyệt sẽ được bật lên, truy cập vào `localhost`. Số port phụ thuộc vào môi trường chạy ứng dụng của máy, giá trị mặc định của nó là 3000. Ở chế độ phát triển, chúng ta có chức năng `hot reloading` - bất cứ sự thay đổi nào trong code sẽ được tự động cập nhật lên trang web đang bật.

Ứng dụng cũng bao gồm cả các công việc bên phía server. Để chạy ứng dụng với server, mở một terminal mới bên trong thư mục gốc của ứng dụng và sử dụng các câu lệnh sau:

#### `cd server && node server.js`

Câu lệnh này đưa chúng ta vào trong thư mục `server` và khởi động server NodeJS với số port mặc định là 5000. Kết nối từ React phía khách đến Node phía chủ được định nghĩa ở cặp giá trị có key `proxy` trong file [client/package.json](client/package.json).

### Chế độ sản phẩm (Production)

Có thể bạn sẽ muốn chạy ứng dụng trong chế độ sản phẩm. Để làm được việc này, di chuyển về gốc của thư mục ứng dụng và sử dụng các câu lệnh sau:

#### `npm run build`

Câu lệnh này build ứng dụng thành các file code dù khó nhìn nhưng gọn gàng hơn, và có thể chạy được ở trên máy của khách hàng đích.\
Quá trình build được định nghĩa ở trường [script](package.json), bao gồm việc cài đặt các package cần thiết, và build code của phần React.

#### `npm run start`

Câu lệnh này khởi động ứng dụng sau khi build xong. Ứng dụng bây giờ sẽ chạy trong chế độ sản phẩm. Chế độ này không còn hot reloading nữa, các thay đổi trong code phải được build lại. Số port sẽ được hiện lên trên màn hình terminal (giá trị mặc định là 5000), truy cập vào `localhost` với số port được cung cấp để sử dụng ứng dụng.

## Các tính năng có trong ứng dụng

Ứng dụng bao gồm các tính năng sau:

    - Đăng nhập / Đăng ký: bao gồm đăng nhập, đăng ký và thay đổi thông tin tài khoản. 
    - Dịch vụ bàn: bao gồm đặt bàn và hủy đặt bàn.
    - Đặt món ăn.
    - Thanh toán: sau khi đặt món ăn.
    - Quản lý: chỉ dành cho quản lý. Tính năng này bao gồm quản lý đơn hàng, quản lý khách hàng, quản lý nhân viên và quản lý menu.

Chi tiết về các luồng thực thi và cách sử dụng của các tính năng được trình bày chi tiết ở [Hướng dẫn sử dụng](/document/UserManual/UserManual.pdf).