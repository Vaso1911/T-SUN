const elementSelectOne = () => {
  const element = document.getElementById('selectOne');
  const choices =new Choices(element, {
    noResultsText: 'Нет данного города',
    itemSelectText: 'Выберите город',
  })
}
elementSelectOne();

const elementSelectTwo = () => {
  const element = document.getElementById('selectTwo');
  const choices =new Choices(element, {
    noResultsText: 'Нет данного города',
    itemSelectText: 'Выберите город',
  })
}
elementSelectTwo();


