angular.module('app.controllers', [])

  .controller('articlePageCtrl', ['$scope', '$stateParams', '$ionicSlideBoxDelegate', 'FinancList', '$timeout','$ionicLoading', // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $ionicSlideBoxDelegate, FinancList, $timeout, $ionicLoading) {

      $scope.articles = [{id: 0, avatar: 1, img: 2, title: 3, des: 4, see: 5},
        {id: 1, avatar: 1, img: 2, title: 3, des: 4, see: 5}];
      //为了验证属性active-slide定义的模型，angularjs是mvc模式
      $scope.model = {
        activeIndex: 0
      };
      //滑动图片的点击事件
      $scope.coverFlowClick = function () {
        var index = $ionicSlideBoxDelegate.currentIndex();
        console.log("coverFlowClick index = ", index);
      }
      //此事件对应的是pager-click属性，当显示图片是有对应数量的小圆点，这是小圆点的点击事件
      $scope.pageClick = function (index) {
        //alert(index);
        console.log("pageClick index = ", index);
        $scope.model.activeIndex = index;
      };

      //当图片切换后，触发此事件，注意参数
      $scope.slideHasChanged = function ($index) {
        //alert($index);
        //console.log("slideHasChanged index = ", $index);
      };
      //这是属性delegate-handle的验证使用的，其实没必要重定义，直接使用$ionicSlideBoxDelegate就可以
      $scope.delegateHandle = $ionicSlideBoxDelegate;
      //按钮点击事件
      $scope.articleBtnClick = function (index) {
        console.log("articleBtnClick index = ", index);
      }
      //文章点击事件
      $scope.articleListClick = function (index) {
        console.log("articleListClick index = ", index);
        window.open(' https://jinshuju.net/f/wTfOt4', '_blank', 'location=yes');
      }
      //上拉加载更多
      FinancList.param.hasmore = true;
      //上拉触发函数
      $scope.loadMore = function () {
        //弹出缓冲提示
        $scope.showLoadingToast();
        //这里使用定时器是为了缓存一下加载过程，防止加载过快
        $timeout(function () {
          if (!FinancList.param.hasmore) {
            $scope.$broadcast('scroll.infiniteScrollComplete');
            //停止缓冲提示
            $scope.hideLoadingToast();
            return;
          }
          $scope.articles.push(FinancList.getList())
          $scope.$broadcast('scroll.infiniteScrollComplete');
          FinancList.param.curPage++;
          //停止缓冲提示
          $scope.hideLoadingToast();
        }, 1500);
      };
      //控制列表是否允许其加载更多
      $scope.moreDataCanBeLoaded = function () {
        return FinancList.param.hasmore;
      }
      $scope.showLoadingToast = function () {
        // Setup the loader
        $ionicLoading.show({
          template: 'Loading Contents...',
          content: 'Loading',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });
      }
      $scope.hideLoadingToast = function () {
        $ionicLoading.hide();
      }
    }])

  .controller('testPageCtrl', ['$scope', '$stateParams', '$ionicTabsDelegate', '$timeout', 'FinancList', // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $ionicTabsDelegate, $timeout, FinancList) {
      //顶部导航栏的tabs
      $scope.tabs = [{id: 0, title: "性格"}, {id: 1, title: "心理"}, {id: 2, title: "职业"}, {id: 3, title: "爱情"}];
      $scope.tests = [{title: "性格"}, {title: "心理"}, {title: "职业"}, {title: "爱情"}];
      //设置顶部tab的默认选中，延时50毫秒让controller充分初始化
      $timeout(function () {
        $ionicTabsDelegate.$getByHandle("testTabsHandle").select(0);
      }, 200);

      //顶部导航栏的点击事件
      $scope.selectedTab = function ($index) {
        console.log("selectedTab index = ", $index);
      }
      //测试列表的点击事件
      $scope.testListClick = function ($index) {
        console.log("testListClick index = ", $index);
        window.open('https://jinshuju.net/f/lidEsD', '_blank', 'location=yes');
      }
      //上拉加载更多
      FinancList.param.hasmore = true;
      //上拉触发函数
      $scope.loadMore = function () {
        //这里使用定时器是为了缓存一下加载过程，防止加载过快
        $timeout(function () {
          if (!FinancList.param.hasmore) {
            $scope.$broadcast('scroll.infiniteScrollComplete');
            return;
          }
          $scope.tests.push(FinancList.getList())
          $scope.$broadcast('scroll.infiniteScrollComplete');
          FinancList.param.curPage++;
        }, 1500);
      };
      //控制列表是否允许其加载更多
      $scope.moreDataCanBeLoaded = function () {
        return FinancList.param.hasmore;
      }
    }])

  .controller('classPageCtrl', ['$scope', '$stateParams', '$timeout', '$ionicTabsDelegate', 'FinancList', // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $timeout, $ionicTabsDelegate, FinancList) {
      $scope.tabs = [{title: "热门课程"}, {title: "限时免费"}, {title: "最新课程"}];
      $scope.classes = [{title: "热门课程"}, {title: "限时免费"}, {title: "最新课程"}];
      //设置顶部tab的默认选中，延时50毫秒让controller充分初始化
      $timeout(function () {
        $ionicTabsDelegate.$getByHandle("classTabsHandle").select(0);
      }, 100);
      //顶部导航栏的点击事件
      $scope.selectedTab = function ($index) {
        console.log("selectedTab index = ", $index);
      }
      //测试列表的点击事件
      $scope.classListClick = function ($index) {
        console.log("classListClick index = ", $index);
      }
      //上拉加载更多
      FinancList.param.hasmore = true;
      //上拉触发函数
      $scope.loadMore = function () {
        //这里使用定时器是为了缓存一下加载过程，防止加载过快
        $timeout(function () {
          if (!FinancList.param.hasmore) {
            $scope.$broadcast('scroll.infiniteScrollComplete');
            return;
          }
          $scope.classes.push(FinancList.getList())
          $scope.$broadcast('scroll.infiniteScrollComplete');
          FinancList.param.curPage++;
        }, 1500);
      };
      //控制列表是否允许其加载更多
      $scope.moreDataCanBeLoaded = function () {
        return FinancList.param.hasmore;
      }
    }])

  .controller('searchPageCtrl', ['$scope', '$stateParams', '$timeout', 'FinancList', '$ionicPopup', // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $timeout, FinancList, $ionicPopup) {
      $scope.searchArticles = [{title: "热门课程"}, {title: "限时免费"}, {title: "最新课程"}];
      //上拉加载更多
      FinancList.param.hasmore = true;
      //上拉触发函数
      $scope.loadMore = function () {
        //这里使用定时器是为了缓存一下加载过程，防止加载过快
        $timeout(function () {
          if (!FinancList.param.hasmore) {
            $scope.$broadcast('scroll.infiniteScrollComplete');
            return;
          }
          $scope.searchArticles.push(FinancList.getList())
          console.log("loadMore");
          $scope.$broadcast('scroll.infiniteScrollComplete');
          FinancList.param.curPage++;
        }, 1500);
      };
      //控制列表是否允许其加载更多
      $scope.moreDataCanBeLoaded = function () {
        return FinancList.param.hasmore;
      }
      //弹出提示
      $scope.showAlert = function () {
        var alertPopup = $ionicPopup.alert({
          title: '提示',
          template: '没有更多内容啦！'
        });
        alertPopup.then(function (res) {
          console.log('alert res', res);
        });
      };
    }])

  .controller('articleDetailPageCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('testDetailPageCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('loginPageCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('accountCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {
      $scope.accountName = "猫小糖";
      $scope.accountSign = "Life is like a play, thanks to acting";
      //个人信息页面按钮点击事件
      $scope.accountBtnClick = function (index) {
        console.log("accountBtnClick index = ", index);
      }
      //列表点击事件
      $scope.accountItemClick = function (index) {
        console.log("accountItemClick index = ", index);
      }
    }])
