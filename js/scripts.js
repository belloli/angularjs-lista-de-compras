'use strict';

var app = angular.module('ListaDeCompras', []);

app.controller('cLista', function cLista($scope) {

	$scope.listaId = '';

	$scope.listas = [
		{
			id			: 1,
			nome		: 'Exemplo'
		},
		{
			id			: 2,
			nome		: 'Teste'
		}
	];

	$scope.produtos = [
		{
			id_lista	: 1,
			id			: 1,
			imagem		: 'http://www.geekpics.net/images/2013/09/13/yvj4dAXZ.jpg',
			nome		: 'Produto de exemplo',
			preco		: '10,50',
			quantidade: '10,50'
		},
		{
			id_lista	: 2,
			id			: 1,
			imagem		: 'http://www.geekpics.net/images/2013/09/13/yvj4dAXZ.jpg',
			nome		: 'Produto de TESTE',
			preco		: '7,50',
			quantidade: '10,50'
		}
	];


	$scope.salvarLista = function(id) {
		if($scope.salvarListaID == null) {
			var id = $scope.listas[$scope.listas.length-1].id;
			$scope.listas.push({
				id:		id+1,
				nome:	$scope.salvarListaNome
			});
        } else {
			var i, max = $scope.listas.length;
			for(i=0; i<max; i++) {
				if($scope.listas[i].id == $scope.salvarListaID) {
					$scope.listas[i].id		= $scope.salvarListaID;
					$scope.listas[i].nome	= $scope.salvarListaNome;
				}
			}
		}
		$scope.salvarListaID; = $scope.salvarListaNome =  '';
	};
    $scope.saveContact = function() {

        if($scope.newcontact.id == null) {
             $scope.newcontact.id = uid++;
             $scope.contacts.push($scope.newcontact);
        } else {
            
             for(i in $scope.contacts) {
                    if($scope.contacts[i].id == $scope.newcontact.id) {
                        $scope.contacts[i] = $scope.newcontact;
                    }
             }                
        }
        $scope.newcontact = {};
    }

	$scope.deleteLista = function(id) {
		var i, max = $scope.listas.length;
		for(i=0; i<max; i++) {
			if($scope.listas[i].id == id) {
				$scope.listas.splice(i,1);
			}
		}
		var i, max = $scope.produtos.length;
		for(i=0; i<max; i++) {
			if($scope.produtos[i].id_lista == id) {
				$scope.produtos.splice(i,1);
			}
		}
	}

	$scope.editarLista = function(id) {
		var i, max = $scope.listas.length;
		for(i=0; i<max; i++) {
			if($scope.listas[i].id == id) {
				$scope.salvarListaNome = angular.copy($scope.listas[i].nome);
			}
		}
	}

});














// Menu[lista, comprar]
$(function () {
	$('#menu a:last').tab('show');
})