import Link  from "next/link";

// js/components/InsertPage.jsx
export default function InsertPage() {
	const insertRecord = (event) => {
		event.preventDefault();
		const titlu = document.getElementById("titlu").value;
		const descriere = document.getElementById("descriere").value;
		const gen = document.getElementById("gen").value;
		const durata = document.getElementById("durata").value;
		const data = {titlu, descriere,gen,durata};
		fetch("/api/records", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then(() => {
			console.log("New record inserted");
			document.getElementById("titlu").value = "";
			document.getElementById("descriere").value = "";
			document.getElementById("gen").value = "";
			document.getElementById("durata").value = "";
		});
	}

	return (
		<section className="bg-violet-200">
			<div className="container px-6 py-10 mx-auto">
				<h1 className="w-[1000px] mx-auto text-center text-violet-900 font-bold text-5xl">MoviesWallet</h1>
				<p className="text-center font-bold text-violet-900 mt-4 text-3xl">Adaugati un film nou</p>

				<form >
				
					<div className=" mb-6">
						<label htmlFor="titlu" className="block mb-2 text-lg font-medium text-violet-900 underline dark:text-white">Denumire:</label>
						<input type="text" id="titlu"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="Scrieti denumirea filmului..." required/>
					</div>
					<div className=" mb-6">
						<label htmlFor="descriere"
						       className="block mb-2 text-lg font-medium text-violet-900 underline dark:text-white">Descriere:</label>
						<textarea type="text" id="descriere"
						       className="bg-gray-50 border border-gray-300 text-gray-900  text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="Adaugati o descriere..." required/>
					</div>
					<div className="mb-6">
						<label htmlFor="gen" className="block mb-2 text-lg font-medium text-violet-900 underline dark:text-white">Gen:</label>
						<input type="text" id="gen"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="Scrieti genul/genurile filmului separate prin , (Ex:Actiune, Drama) " required/>
					</div>
					<div className=" mb-6">
						<label htmlFor="durata" className="block mb-2 text-lg font-medium text-violet-900 underline dark:text-white">Durata:</label>
						<input type="text" id="durata"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="Introduceti durata in minute (Ex:120)" required/>
					</div>
					<div className="flex flex-col items-center justify-center ">
					<button type="submit"
					        onClick={ insertRecord }
					        className="text-white bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700 hover:bg-gradient-to-br focus:ring-4 shadow-lg shadow-violet-500/50 dark:shadow-lg dark:shadow-violet-800/90focus:outline-none focus:ring-violet-300 dark:focus:ring-violet-800 font-medium rounded-lg text-3xl px-6 py-3 text-center mr-2 "> + Adauga
					</button>
					
					</div>
					<Link href={`/`}>
					<button 
					        className="text-white bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700 hover:bg-gradient-to-br focus:ring-4 shadow-lg shadow-violet-500/50 dark:shadow-lg dark:shadow-violet-800/90 focus:outline-none focus:ring-violet-300 dark:focus:ring-violet-800 font-medium rounded-lg text-3xl px-6 py-3 text-center mr-2 mb-2">
							Inapoi
					</button>
					</Link>
				</form>
			</div>
		</section>
	)
}