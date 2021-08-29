interface Question {
  text: string;
  answers: Record<string, string>;
}

class Store {
  readonly questions: Array<Question> = [
    {
      text: 'Как часто Вы используете в своем коде git push --force?',
      answers: {
        a: 'Довольно часто',
        b: 'Иногда',
        c: 'Не использую',
      }
    },
    {
      text: 'В Вашем коде много повторяющихся сущностей?',
      answers: {
        a: 'Много, да почти весь проект из них состоит',
        b: 'Среднее количество',
        c: 'Очень мало (где-то 2 от силы)',
      }
    },
    {
      text: 'Увлекаетесь ли Вы экстремальными видами спорта (горные лыжи, скейтбординг и т.д.)?',
      answers: {
        a: 'Не только увлекаюсь, но и регулярно практикую',
        b: 'Пробовал/а, иногда могу прокатиться сам/а или с друзьями',
        c: 'Нет, это слишком опасно',
      }
    },
  ];
  readonly answersWeight: Record<string, number> = {
    a: 5,
    b: 3,
    c: 0
  } 
  userAnswers: Array<Array<any>> = [];
  addUserAnswer(id: number, answer: string) {
    const existingAnswer = this.userAnswers.find((answer) => id === answer[0]);
    if (existingAnswer) {
      existingAnswer[1] = answer;
    } else {
      this.userAnswers.push([id, answer]);
    }
  }
  getResult(): number {
    let total = 0;
    this.userAnswers.forEach((item) => {
      total += this.answersWeight[item[1]];
    })
    return total;
  }
}

export default new Store();
