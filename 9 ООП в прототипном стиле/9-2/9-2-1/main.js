'use strict';
/*

*/
//1-  true  объект пустой, найдет свойство  в прототипе
//2-true объект пустой, найдет свойство  в прототипе. смена прототипа на предыдущий созданный объект не повлияет
//3-false  ссылка на объект та же- то еть прототип тот же, а уже свойтсва протоипа мы поменяли
//4-true рэббит пустой- нечего удалять а св-во мы берем из прототипа
//5-undef а вот тут мы удалили свойтсо из прототипа- тогда и рэббит его потеряет