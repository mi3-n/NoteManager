//solution goes here....

const ul = document.querySelector('ul');

document.getElementById('add-btn').addEventListener('click', function(e) {
	e.preventDefault();
	console.log('Hello');

	const addInput = document.getElementById('add-input');

	if(addInput.value !== ''){  
// （空白だったらなにもしない）

// htmlを打ちこんでる
	const li = document.createElement('li'),
	    firstPar = document.createElement('p'),
	    secondPar = document.createElement('p'),
	    firstIcon = document.createElement('i'),
	    secondIcon = document.createElement('i'),
	    input = document.createElement('input');

	    firstIcon.className = "fa fa-pencil-square-o";
	    secondIcon.className = "fa fa-times";
	    input.className = "edit-note";
	    input.setAttribute('type', 'text');　
        
// pの値を設定
	    firstPar.textContent = addInput.value;

// pの子要素にiを設定
	    secondPar.appendChild(firstIcon);
	    secondPar.appendChild(secondIcon);

	    li.appendChild(firstPar);
	    li.appendChild(secondPar);
	    li.appendChild(input);

	    ul.appendChild(li);

// テキストboxを空にしてる
	    addInput.value = '';
	    
	}
});


// // formをとってくる
// const form = document.querySelector('#add')
// // inputのテキストboxを持って来る
// const input = document.getElementById('add-input')
// // ulタグの一番下の子要素を取得
// var list = document.getElementById("list");
// // addボタンを押したときに実行される
// form.addEventListener('submit', function(e){
//     e.preventDefault()
// //ulタグの一番下の子要素を取得 
//     var liTag = list.lastElementChild


//     // 複製　（取得してきた子要素をコピー）
//     var clone_element = liTag.cloneNode(true);

//     // 一番上のタグを取得
//     var h2_element = clone_element.querySelector("p");
//     // pタグに対してInputの値を設定
//     h2_element.textContent = input.value;
//     // Liタグの一番下に作った要素を挿入
//     liTag.after(clone_element);
//     // テキストboxを空にしてる
// 	input.value = '';

// })