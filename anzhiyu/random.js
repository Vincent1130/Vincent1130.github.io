var posts=["2023/06/25/23年7月新番/","2023/06/22/Axios基础/","2024/01/21/CSS基础/","2023/07/09/ES6模块化与异步编程/","2024/01/21/CSS盒子模型/","2024/01/21/Flex布局/","2024/01/21/H5基础/","2023/06/07/Vue2学习-01/","2023/06/08/Vue2学习-02/","2023/07/08/Vue2学习-05/","2023/06/24/Vue2学习-04/","2023/06/22/Vue2学习-03/","2023/06/24/Vue2组件间数据传递/","2023/06/25/nextTick小实例/","2024/01/21/云南旅游攻略/","2023/06/05/阿里前端规范（Vue）/","2023/06/08/前端随记/note01/","2023/06/24/前端随记/note03/","2023/06/08/前端随记/note02/","2023/06/25/前端随记/note04/","2023/06/28/前端随记/note05/","2023/06/29/前端随记/note06/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};