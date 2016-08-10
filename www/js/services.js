angular.module('app.services', [])

  .factory('BlankFactory', [function () {

  }])

  .service('BlankService', [function () {

  }])

  .factory('FinancList', function () {
    var param = {};
    //页码
    param.curPage = 1;
    param.hasmore = false;
    function getList() {
      //return $resource(UrlUtil.root + 'financeList.do', {}, {
      //  query: {method: 'GET', params: param}
      //});
      return {id: 1, avatar: 1, img: 2, title: 3, des: 4, see: 5};
    }
    return {
      getList: getList,
      param: param
    };
  })
