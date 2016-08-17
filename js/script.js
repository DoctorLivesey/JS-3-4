var obj = {
  parent: document.body,
  container: '',
  header: '',
  form: '',
  questions: '',
  wrapper: '',
  answers: '',
  question: ['1. Вопрос №1', '2. Вопрос №2', '3. Вопрос №3'],
  answer: ['Вариант ответа №1', 'Вариант ответа №2','Вариант ответа №3'],
  button: '',
    makeContainer: function(){
      this.container = document.createElement('div');
      this.container.classList.add('cont');
      this.parent.appendChild(this.container);
    },
    makeHeader: function(){
      this.header = document.createElement('span');
      this.header.classList.add('header');
      this.header.innerHTML = 'Тест по программированию';
      this.container.appendChild(this.header);
    },
    makeForm: function(){
      this.form = document.createElement('form');
      this.form.setAttribute('action', '#');
      this.form.setAttribute('method', 'post');
   	  this.container.appendChild(this.form);
    },
    makeWrapper: function(){
      this.wrapper = document.createElement('div');
      this.wrapper.classList.add('wrap');
      this.form.appendChild(this.wrapper);
    },
    makeQuestions: function(x){
      this.questions = document.createElement('ul');
      this.questions.classList.add('question');
      this.questions.innerHTML = this.question[x];
      this.wrapper.appendChild(this.questions);
    },
    makeAnswers: function(y){
      this.answers = document.createElement('li');
      this.answers.classList.add('question-item');
      this.answers.innerHTML = '<input type="checkbox">' + this.answer[y];
      this.questions.appendChild(this.answers);
    },
    makeButton: function(){
      this.button = document.createElement('input');
      this.button.setAttribute('type', 'submit');
      this.button.setAttribute('value', 'Проверить мои результаты');
      this.form.appendChild(this.button);
    }

}
obj.makeContainer();
obj.makeHeader();
obj.makeForm();
obj.makeWrapper();
obj.makeButton();

 for ( var x = 0; x < 3; x++ ){
   obj.makeQuestions(x);
     for ( var y = 0; y < 3; y++ ){
  	   obj.makeAnswers(y);
     }
 }