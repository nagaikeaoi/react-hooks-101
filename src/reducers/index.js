// action = {
//   type: 'CREATE_EVENT',
//   title: '2020年東京オリンピックのお知らせ',
//   body: '2020年に東京でオリンピックを開催します！つきましては、、、'
// }

/*
#before
state = []
#after
state = [
  {id:1,title:'2020年東京オリンピックのお知らせ',body:'2020年に東京でオリンピックを開催します！つきましては、、、'}
]

#before
state = [
  {id:1,title:'タイトル1',body:'ボディー1'}
  {id:2,title:'タイトル2',body:'ボディー2'}
  {id:3,title:'タイトル3',body:'ボディー3'}
]

#after
state = [
  {id:1,title:'タイトル1',body:'ボディー1'}
  {id:2,title:'タイトル2',body:'ボディー2'}
  {id:3,title:'タイトル3',body:'ボディー3'}
  {id:4,title:'タイトル4',body:'ボディー4'}
]
*/

const events = (state = [], action) => {
  switch (action.type) {
    case "CREATE_EVENT":
      const event = { title: action.title, body: action.body };
      const lenght = state.length;
      const id = lenght === 0 ? 1 : state[lenght - 1].id + 1;
<<<<<<< HEAD
      return [...state, { id, ...event }];
=======
      return state;
>>>>>>> 51656bff8b1c90cc5fd09a8b0f3e4672a87115df
    case "DELETE_EVENT":
      return state;
    case "DELETE_ALL_EVENT":
      return [];
    default:
      return state;
  }
};

export default events;
