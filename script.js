var todoForm = document.getElementById('todo-form');
var todoInput = document.getElementById('todo-input');
var taskList = document.getElementById('task-list');

// フォームが送信された際の処理
todoForm.addEventListener('submit', function (e) {
  e.preventDefault(); // フォームのデフォルトの送信処理を無効化
  addTask(todoInput.value); // タスクを追加する関数を呼び出し
  todoInput.value = ''; // 入力欄を空にする
});

// タスクを追加する関数
function addTask(taskName) {
  var li = document.createElement('li');
  li.innerHTML = '<span>' + taskName + '</span><button>完了</button>';
  taskList.appendChild(li);

  // 完了ボタンを押された際の処理
  var completeButton = li.querySelector('button');
  completeButton.addEventListener('click', function () {
    li.remove(); // タスクを削除
  });
}
