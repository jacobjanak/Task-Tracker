<template>
	<div
		:class="['task', task.reminder ? 'reminder' : '']"
		@dblclick="$emit('toggle-reminder')"
	>
		<h3>
			{{ task.text }}
			<i class="fas fa-times" @click="$emit('delete-task')"></i>
		</h3>
		<p>{{ task.day }}</p>
	</div>
</template>

<script>
	export default {
		name: 'Task',
		props: {
			task: Object,
		},
	};
</script>

<style scoped>
	.fa-times {
	  color: red;
	}
	.task {
	  background: #f4f4f4;
	  margin: 5px;
	  padding: 10px 20px;
	  cursor: pointer;
	}
	.task.reminder {
	  border-left: 5px solid green;
	  padding-left: 15px; /* compensate for border */
	}
	.task h3 {
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	}
</style>