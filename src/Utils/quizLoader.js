const loadQuiz = async () => {
    const quizData = await fetch("https://openapi.programming-hero.com/api/quiz")
    const quizItems = await quizData.json


    return quizItems
}

export default loadQuiz;