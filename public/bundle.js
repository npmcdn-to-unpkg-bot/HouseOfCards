(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//State example:
//-----------------------------
// {
//     cards: [{ deckId: 123, data: { front:'front text', back: 'back text'} }],
//     decks: [{id: 123}]
// };
//
//Store dispatching example:
//-----------------------------
// store.dispatch({
//     type: 'ADD_CARD',
//     data: {
//         front: 'front text',
//         back: 'back text'
//     }
// });

var cardsReducer = function cardsReducer(state, action) {
    switch (action.type) {
        case 'ADD_CARD':
            var newCard = Object.assign({}, action.data, {
                score: 1,
                id: +new Date()
            });

            return state.concat([newCard]);

        default:
            return state || [];
    }
};

var store = Redux.createStore(Redux.combineReducers({
    cards: cardsReducer
}));

store.subscribe(function () {
    console.log(store.getState());
});

},{}]},{},[1]);
