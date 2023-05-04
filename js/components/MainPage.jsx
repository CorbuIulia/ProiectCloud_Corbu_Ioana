

import {useEffect, useState} from "react";
import Link from "next/link";
export default function MainPage() {
	const [records, setRecords] = useState([]);

	useEffect(() => {
		try{
			fetch('/api/records', {
				method: 'GET',
			})
				.then(response => response.json())
				.then(json => setRecords(json.data));
		}
		catch (error) {
			console.log(error);
		}
	}, []);

	const deleteRecord = (event) => {
		event.preventDefault();
		const id = event.target.id;
		try {
			fetch(`/api/records?id=${id}`, {
				method: 'DELETE',
			})
				.then(response => response.json())
				.then(json => {
						setRecords(records.filter(record => record._id !== id));
				});
		}
		catch (error) {
			console.log(error);
		}
	}

	

	return (
		<section className="bg-violet-200 ">
			<div className="container px-6 py-10 mx-auto">
				<h1 className="w-[1000px] mx-auto text-center text-violet-900 font-bold text-5xl">Aplicatie pentru gestionarea filmelor</h1>
				<p className="w-[1000px] mx-auto text-center text-violet-900 mt-4 text-3xl mb-10">Aceasta aplicatie prezinta detalii despre filme</p>
				<Link href={`/insert`}>
				<button type="button"
					className="text-white bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-white-300 dark:focus:ring-white-800 shadow-lg shadow-violet-500/50 dark:shadow-lg dark:shadow-violet-800/90 font-medium rounded-lg text-sm px-6 py-3 text-xl mr-2 ">
				+ Adauga film
				</button>
				</Link>
				<div className=" grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
					{records.map(record => (
						<div
							key={record._id}
							className="block max-w-sm p-6 bg-pink-100 border border-gray-200 rounded-lg shadow hover:bg-pink-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
							<h5 className="mb-2 text-[29px] font-bold tracking-tight text-violet-900 dark:text-white">
								{record.titlu}
							</h5>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								<a className="font-bold underline text-[19px]">Descriere:</a> {record.descriere}
							</p>
							
							<p className="font-normal text-gray-700 dark:text-gray-400">
							<a className="font-bold underline">Gen:</a> {record.gen}
							</p>
							<p className="font-normal text-gray-700 dark:text-gray-400">
							<a className="font-bold underline">Durata:</a> {record.durata} minute
							</p>
							<div className={"flex justify-center mt-4"}>
								<button type="button"
								        id={record._id}
								        onClick={deleteRecord}
								        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/90 font-medium rounded-lg text-sm px-6 py-2.5 text-xl mr-2 mb-2">Delete
								</button>
							</div>
						</div>
					))}
				</div>
				
			</div>
		</section>
	)
}