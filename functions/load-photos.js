// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
const APIKEY=process.env.API_KEY
const firebaseConfig = {
	apiKey: APIKEY,
	authDomain: "tzuje30.firebaseapp.com",
	projectId: "tzuje30",
	storageBucket: "tzuje30.appspot.com",
	messagingSenderId: "334398947780",
	appId: "1:334398947780:web:5b61925594ccff41736491",
	measurementId: "G-XE1RQH19N8"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage();
exports.handler = async () => {


	// Create a reference under which you want to list
	const listRef = ref(storage, 'images/');
	let output = { files: [] }
	// Find all the prefixes and items.
	await listAll(listRef)
		.then((res) => {
			res.prefixes.forEach((folderRef) => {
				// All the prefixes under listRef.
				// You may call listAll() recursively on them.
				console.log(folderRef)
			});
			res.items.forEach((itemRef) => {
				let path = "https://firebasestorage.googleapis.com/v0/b/tzuje30.appspot.com/o/images%2F" + 
					    itemRef._location.path_.split('/')[1]+
					    "?alt=media"
				console.log(path)
				output.files.push(path)
			});
		}).catch((error) => {
			// Uh-oh, an error occurred!
		});
	const responseBody = JSON.stringify(output)
	return {
		statusCode: 200,
		body: responseBody,
	};
};
