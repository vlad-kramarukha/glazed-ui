<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import { themeConfig, getMode } from '../theme.config'

const props = defineProps({
	type: String
})


const currentColor = computed(() => themeConfig.value.scheme[getMode()][props.type])
const fillColor = computed(() => themeConfig.value.scheme[getMode()].fill)
const textColor = computed(() => themeConfig.value.scheme[getMode()].text)
</script>

<template>
	<button class="g-button">
		<slot></slot>
	</button>
</template>

<style scoped>
.g-button {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	position: relative;
	padding: 0 18px;
	height: 36px;
	font-family: inherit;
	font-weight: 600;
	font-size: inherit;
	text-transform: uppercase;
	letter-spacing: 1.5px;
	cursor: pointer;
	border-radius: 6px;
	border: none;
	transition: color 0.2s ease;
	background-color: v-bind(fillColor);
	color: v-bind(textColor);
}

.g-button:hover {
	color: v-bind(currentColor);
}

.g-button:focus {
	color: v-bind(currentColor);
	outline: 2px solid v-bind(currentColor);
}
</style>
