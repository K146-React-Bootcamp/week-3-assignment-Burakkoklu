import React, { useState, useEffect } from "react";
import Pagination from "../Pagination";
import Posts from '../Posts';
import Button from "../button";
import classes from "./style.module.css";
import Todos from "../Posts";



const url = "https://jsonplaceholder.typicode.com/todos";

const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(20);
	const [selectedTodo, setSelectedTodo] = useState("");

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((todos) => {
				setTodos(todos);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = todos.slice(indexOfFirstPost, indexOfLastPost);

	const renderThead = () => {
		return (
			<thead>
				<tr>
					
					<th>id</th>
					<th>başlık</th>
					<th>durum</th>
					<th>Aksiyon</th>
				</tr>
			</thead>
		);
	};


	const remove = (todo) => {
		if (window.confirm("Silmek üzerisiniz emin misiniz")) {
			setTodos(prev => {
				return prev.filter(x => x.id != todo.id)
			})
		}
	}

	const edit = (todo) => {
		setSelectedTodo(todo);
	}

	const renderBody = () => {
		return (
			<tbody>
				<Posts todos={currentPosts} loading={loading} />
				
					{/* Edit - Remove Buton alanı */}

			</tbody>
		);
	};



	const submit = (event) => {
		event.preventDefault();
		console.log(selectedTodo);
	}

	const renderEditForm = () => {
		return (
			<form onSubmit={submit}>
				<input type={"text"} onChange={(e) => setSelectedTodo(e.target.value)}
				/>
				<input type="checkbox" />
				<Button>Kaydet</Button>
				<Button onClick={() => setSelectedTodo(undefined)}>Vazgeç</Button>

			</form>
		)
	}
	const paginate = pageNumber => setCurrentPage(pageNumber);
	return (
		<div className={`${classes.container} container`}>
			{selectedTodo && renderEditForm()}
			<table className="table">
				{renderThead()}
				{renderBody()}
				<Pagination
		
        postsPerPage={postsPerPage}
        totalPosts={todos.length}
        paginate={paginate}
      />
			</table>
		</div>
	);
};

export default TodoList;
