<script setup lang="ts">
import { CashOutline as CashIcon } from '@vicons/ionicons5'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
    <h2>{{ msg }}</h2>

    <div class="card">
        <n-button type="primary" @click="count++">count is {{ count }}</n-button>
    </div>

    <n-space>
        <n-button>Default</n-button>
        <n-button type="tertiary"> Tertiary </n-button>
        <n-button type="primary"> Primary </n-button>
        <n-button type="info"> Info </n-button>
        <n-button type="success"> Success </n-button>
        <n-button type="warning"> Warning </n-button>
        <n-button type="error"> Error </n-button>
    </n-space>

    <br>

    <n-space>
        <n-button strong secondary> Default </n-button>
        <n-button strong secondary type="tertiary"> Tertiary </n-button>
        <n-button strong secondary type="primary"> Primary </n-button>
        <n-button strong secondary type="info"> Info </n-button>
        <n-button strong secondary type="success"> Success </n-button>
        <n-button strong secondary type="warning"> Warning </n-button>
        <n-button strong secondary type="error"> Error </n-button>
    </n-space>

    <br>

    <n-space>
        <n-button strong secondary round> Default </n-button>
        <n-button strong secondary round type="primary"> Primary </n-button>
        <n-button strong secondary round type="info"> Info </n-button>
        <n-button strong secondary round type="success"> Success </n-button>
        <n-button strong secondary round type="warning"> Warning </n-button>
        <n-button strong secondary round type="error"> Error </n-button>
    </n-space>

    <br>

    <n-space>
        <n-button strong secondary circle>
            <template #icon>
                <n-icon><CashIcon /></n-icon>
            </template>
        </n-button>
        <n-button strong secondary circle type="primary">
            <template #icon>
                <n-icon><CashIcon /></n-icon>
            </template>
        </n-button>
        <n-button strong secondary circle type="info">
            <template #icon>
                <n-icon><CashIcon /></n-icon>
            </template>
        </n-button>
        <n-button strong secondary circle type="success">
            <template #icon>
                <n-icon><CashIcon /></n-icon>
            </template>
        </n-button>
        <n-button strong secondary circle type="warning">
            <template #icon>
                <n-icon><CashIcon /></n-icon>
            </template>
        </n-button>
        <n-button strong secondary circle type="error">
            <template #icon>
                <n-icon><CashIcon /></n-icon>
            </template>
        </n-button>
    </n-space>
</template>

<style scoped>

</style>
