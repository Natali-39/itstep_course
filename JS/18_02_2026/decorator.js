function slow(x) {
    // здесь могут быть ресурсоёмкие вычисления
    alert(`Called with ${x}`);
    return x;
}
  
  function cachingDecorator(func) {
        let cache = new Map();
  
        return function(x) {
            if (cache.has(x)) {    // если кеш содержит такой x,
        return cache.get(x); // читаем из него результат
    }
  
      let result = func(x); // иначе, вызываем функцию
  
      cache.set(x, result); // и кешируем (запоминаем) результат
      return result;
    };
}
  
slow = cachingDecorator(slow);
  
alert( slow(1) ); // slow(1) кешируем
alert( "Again: " + slow(1) ); // возвращаем из кеша
  
alert( slow(2) ); // slow(2) кешируем
alert( "Again: " + slow(2) ); // возвращаем из кеша

//В коде выше cachingDecorator – это декоратор, специальная функция, которая принимает другую функцию и изменяет её поведение. 
//Идея состоит в том, что мы можем вызвать cachingDecorator с любой функцией, в результате чего мы получим кеширующую обёртку. Это здорово, т.к. у нас может быть множество функций, использующих такую функциональность, и всё, что нам нужно сделать – это применить к ним cachingDecorator. 
//Отделяя кеширующий код от основного кода, мы также сохраняем чистоту и простоту последнего.



//Применение «func.call» для передачи контекста

function User(){
    this.name = null;
    this.age = 0;
}

let user = new User();
user.name = "Peter";

function sayHi (helloPhrase, komma) {
    
    let show = () => {
        console.log(`${helloPhrase}, ${this.name}${komma}`);
    }

    show();
}

sayHi.call(user, "hello", "!");

