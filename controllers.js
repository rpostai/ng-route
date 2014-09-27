// Criação do módulo para os serviços do Email
var moduleMailServices = angular.module('Mail', ['ngRoute']);

// Configurar as rotas entre as urls, templates e controladores
function emailRouteConfig($routeProvider) {$routeProvider
  .when('/show', {
    controller: ListController,
    templateUrl: 'list.html'
  })
  .when('/view/:id', {
    controller: DetailController,
    templateUrl: 'detail.html'
  }).
  otherwise({
    redirectTo: '/index.html'
  });
}

// Vincular o roteador com o módulo
moduleMailServices.config(emailRouteConfig);

// Algumas mensagens de teste
var mensagens = [{
  id: 0, sender: 'jose@teste.com', subject: 'Aula Angular JS',
  date: 'Jun 6, 2014 12:32:00', recipients: ['paulo@teste.com'],
  message: 'A aula de AngularJS foi adiada para o dia 22/06'
}, {
  id: 1, sender: 'maria@teste.com',
  subject: 'Próxima aula sobre CSS',
  date: 'Jun 6, 2014 12:32:00', recipients: ['paulo@teste.com'],
  Message: 'A aula sobre CSS será no início do terceiro bimestre!'
},];

function ListController($scope) {
  $scope.mensagens = mensagens;
}

function DetailController($scope, $routeParams) {
  $scope.mensagens = mensagens[$routeParams.id];
}