angular.module( 'ngBoilerplate.about', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

// .filter('positive', function() {
//   return function(input) {
//     input = input || '';

//     if (input === '0') {
//       return "0,00";
//     } else {
//       input = input.toString().replace(/,/g,".");
//       input = input.replace(/.(\w+)$/, ",$1");
//       return input;
//     }
//   };
// })
// 
//  <td>{{fonds.aantalUnits | number : 4 | change}}</td>
              // <td>&#8364;{{fonds.koers | number : 2 | change}}</td>
              // <td>&#8364;{{fonds.waarde | number : 2 | change}}</td>
              // <td>&#8364;{{fonds.garantie | number : 2 | change}}</td>

.config(function config( $stateProvider ) {
  $stateProvider.state( 'about', {
    url: '/about/:id',
    views: {
      "main": {
        controller: 'AboutCtrl',
        templateUrl: 'about/about.tpl.html'
      }
    },
    data:{ pageTitle: 'Results' }
  });
})

.controller( 'AboutCtrl', function AboutCtrl( $scope,$stateParams,$state ) {

  var id = $stateParams.id;
  console.log(id);

  if (id === '1') {
    console.log('employee 1 results');
    $scope.keyWords = ['middle management: 0.8', 'middle management layer.Well', 'direct colleagues', 'wrong direction', 'certain direction', 'paper pushers', 'old model', 'late way', 'workplace.Well my assignment', 'fun', 'Capgemini', 'organisation', 'bullshit', 'competitor', 'salary', 'rewards', 'lack', 'manager', 'education', 'time', 'interaction', 'home', 'client', 'change.I', 'overhours', 'kind', 'vision'];
    $scope.keyWordsValue = ['-0.815144', '-0.720757', '0.359168', '-0.720856', '-0.208896', '-0.909532', '-0.681894', '-0.616894', '0.466104', '0.251195', '-0.493769', '-0.545956', '-0.362383', '-0.545966', '-0.611894', '-0.909132', '-0.720747', '0.460091', '-0.209896', '-0.810524', '-0.646574', '-0.646575', '-0.621894', '-0.610894', '0.270244', '-0.909432'];
      // $scope.keyWordsValue = ['middle management: 0.8', 'middle management layer.Well', 'direct colleagues', 'wrong direction', 'certain direction', 'paper pushers', 'old model', 'late way', 'workplace.Well my assignment', 'fun', 'Capgemini', 'organisation', 'bullshit', 'competitor', 'salary', 'rewards', 'lack', 'manager', 'education', 'time', 'interaction', 'home', 'client', 'change.I', 'overhours', 'kind', 'vision'];
    $scope.docSentiment = "-0.417834";

  } else if (id === '2') {
    console.log('employee 2 results');
    $scope.keyWords = ['complain.It', 'great.Nothing'];
    $scope.keyWordsValue = ['-0.412798', '-0.442405'];
    $scope.docSentiment = "0.241338";

  } else if (id === '3') {
    console.log('employee 3 results');
    $scope.keyWords = ['challenging me.Good trainings', 'Friendly colleagues.Good relationship', 'Good atmosphere', 'appreciated.Good atmosphere', 'home work', 'doubt', 'assignments', 'Challenge', 'guidance', 'manager', 'opportunities', 'opportunities.'];
    $scope.keyWordsValue = ['-0.431714', '0.506362', '0.596153', '-0.407429', '-0.406429', '-0.241595', '-0.240595', '-0.556733', '0.507872', '-0.551525', '-0.556525'];
    $scope.docSentiment = "0.0516128";

  } else if (id === '4') {
    console.log('employee 4 results');
    $scope.keyWords = ['good personal connection', 'Friday afternoon drinks', 'difficult situations', 'training possibilities', 'current assignment', 'real opportunity', 'good view', 'personal development', 'private life.Heineken', 'best client', 'colleagues', 'compliments', 'cluster', 'atmosphere', 'salary', 'appreciation', 'improvement', 'colleagues.Me', 'manager', 'performance', 'course', 'room', 'assignment.It', 'plan', 'Capgemini', 'work-life-balance', 'way', 'work'];
    $scope.keyWordsValue = ['0.906455', '0.573043', '-0.341041', '0.964094', '0.954094', '0.934094', '0.888368', '-0.321041', '0.85261', '0.700438', '0.63881', '0.705576', '0.722465', '0.721465', '0.757636', '0.704576', '0.880368', '0.907455', '0.907155', '0.885368', '0.848368', '0.881368', '0.562437', '0.904094', '0.914094', '0.924094', '0.80956', '0.85263'];
    $scope.docSentiment = "0.706177";

  } else if (id === '5') {
    console.log('employee 5 results');
    $scope.keyWords = ['all.My manager', 'hard work', 'raise', 'Capgemini', 'affinity', 'pas', 'CEO', 'highlight', 'client', 'pension', 'office', 'Friday', 'company', 'issue', 'times', 'people', 'home.It', 'pm'];
    $scope.keyWordsValue = ['-0.31045','-0.562229','-0.310232','-0.421439','-0.30045','0.56537','-0.608556','-0.560229','-0.609556','0.56637','-0.30245','-0.567621','-0.542428','-0.862636','-0.561229'];
    $scope.docSentiment = "-0.287874";

  }


  $scope.goBack = function() {
    $state.go('home');
  };

  // This is simple a demo for UI Boostrap.
  // $scope.dropdownDemoItems = [
  //   "The first choice!",
  //   "And another choice for you.",
  //   "but wait! A third!"
  // ];
})

;
