/*
 *  TODO:
 *      - ng-hide para Preço total enquanto estiver na lista de Listas
 *      ou mover o conteiner
 *      - Mascara para os campos
 *      - Validação dos campos
 *      - Upload de imagem (imgur) e/ou conversão para base64
 *      - Firebase
 *      - Fallback css&js
 *      - cross-browser: como declarar com o AngularJS?
 *      - AngularJS template ng-view
 */
(function () {
    "use strict";
}());

var app = angular.module('ListaDeCompras', []);
app.controller('cLista', function cLista($scope, $filter) {

    var scp = $scope;
    scp.listaID = scp.listaNome = scp.listas = scp.produtos =
        scp.produtoID = scp.produtoNome = scp.produtoImagem =
        scp.produtoPreco = scp.produtoQuantidade = scp.imgURL = '';


    scp.listas = [
        {
            id: 0,
            nome: 'Eu quero um nome!'
        }
    ];

    scp.produtos = [
        {
            id_lista: 0,
            id: 0,
            imagem: 'img/camera.png',
            nome: 'Produto de exemplo',
            preco: 0,
            quantidade: 0
        }
    ];

    scp.salvarLista = function (idx) {
        if (scp.listaNome === '') {
            return;
        }
        if (idx === '') {
            if (scp.listas.length < 1) {
                var id_aux = 0;
            } else {
                var id_aux = scp.listas[scp.listas.length - 1].id;
            }
            id_aux += 1;
            scp.listas.push({
                id: id_aux,
                nome: scp.listaNome
            });
        } else {
            var i, max = scp.listas.length;
            for (i = 0; i < max; i++) {
                if (scp.listas[i].id === idx) {
                    scp.listas[i].id = idx;
                    scp.listas[i].nome = scp.listaNome;
                }
            }
        }
        scp.listaID = scp.listaNome = '';
    };


    scp.removerLista = function (idx) {
        var antes = scp.listas;
        scp.listas = [];
        angular.forEach(antes, function (lista) {
            if (lista.id !== idx) {
                scp.listas.push(lista);
            }
        });
        antes = scp.produtos;
        scp.produtos = [];
        angular.forEach(antes, function (produto) {
            if (produto.id_lista !== idx) {
                scp.produtos.push(produto);
            }
        });
    };

    scp.editarLista = function (idx, nome) {
        scp.listaID = idx;
        scp.listaNome = nome;
    };

    scp.selecionarLista = function (idx) {
        scp.listaID = idx;

    };

    scp.salvarProduto = function (idx) {
        if (scp.produtoNome === '') {
            return;
        }
        if (idx === '') {
            return alert('Você precisa de uma lista.');
        }
        if (scp.produtoID === '') {
            var id_aux;
            if (scp.produtos.length < 1) {
                id_aux = 0;
            } else {
                id_aux = scp.produtos[scp.produtos.length - 1].id;
            }
            id_aux += 1;
            scp.produtos.push({
                id_lista: scp.listaID,
                id: id_aux,
                nome: scp.produtoNome,
                imagem: scp.produtoImagem,
                preco: scp.produtoPreco,
                quantidade: scp.produtoQuantidade
            });
        } else {
            var i, max = scp.produtos.length;
            for (i = 0; i < max; i++) {
                if (scp.produtos[i].id === scp.produtoID) {
                    scp.produtos[i].id_lista = scp.listaID;
                    scp.produtos[i].nome = scp.produtoNome;
                    scp.produtos[i].imagem = scp.produtoImagem;
                    scp.produtos[i].preco = scp.produtoPreco,
                    scp.produtos[i].quantidade = scp.produtoQuantidade;
                }
            }
        }
        scp.produtoID = scp.produtoNome = scp.produtoImagem = scp.produtoPreco = scp.produtoQuantidade = '';
    };

    scp.editarProduto = function (lista_idx, idx, nome, img, preco, qtd) {
        scp.listaID = lista_idx;
        scp.produtoID = idx;
        scp.produtoNome = nome;
        scp.produtoImagem = img;
        scp.produtoPreco = preco;
        scp.produtoQuantidade = qtd;
    };

    scp.removerProduto = function (idx) {
        var antProduto = scp.produtos;
        scp.produtos = [];
        angular.forEach(antProduto, function (produto) {
            if (produto.id !== idx) {
                scp.produtos.push(produto);
            }
        });
    };

    scp.precoTotal = function (idx) {
        var total = 0,
            antProduto = scp.produtos;
        angular.forEach(antProduto, function (produto) {
            if (produto.id_lista === idx) {
                total += produto.preco * produto.quantidade;
            }
        });
        scp.precoTotalData = total;
        return scp.precoTotalData;
    };

    scp.produtoImgUrl = function () {
        scp.produtoImagem = scp.imgURL;
        scp.imgURL = '';
    };

});

app.filter('DefaultImg', function () {
    return function (input) {
        if (typeof (input) === 'undefined' || input === '') {
            return "img/camera.png";
        } else {
            return input;
        }
    };
});


// Menu[lista, comprar]
$(function () {
    $('#menu a:last').tab('show');
});