<template>
	<main>
		test
	</main>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
onMounted(() => {
	getData();
	axios.get('/api/getUserInfo').then((res) => {
		console.log(res);
	});
});
const getData = () => {
	axios.get('/api/hhh/getUserInfo').then((res) => {
		console.log(res);
		let data = res.data.response;
		// for (let i = 0; i < data.length; i++) {
		// 	datas.dataList[i].value = data[i];
		// }
	});
};

</script>
