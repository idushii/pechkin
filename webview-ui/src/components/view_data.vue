<template>
    <div>
        <div class="header">
            <vscode-text-field :value="item.title" placeholder="Заголовок"></vscode-text-field>
            <vscode-text-field :value="item.name" placeholder="Наименование"></vscode-text-field>
        </div>
        <vscode-panels activeid="tab-1" aria-label="With Active Tab" @change="handleChangeTab">
            <template v-for="item1 of item.payloads">
                <vscode-panel-tab :id="`tab-${item1.name}`">{{ item1.title }}</vscode-panel-tab>
                <vscode-panel-view :id="`view-${item1.name}`">
                    <div class="wrap-tab-data">
                        <vscode-text-area :value="getJsonStr(item1.payload)" resize="vertical" rows="10"></vscode-text-area>
                        <div class="doc">
                            <div class="doc-line title">
                                <div>
                                    Заголовок
                                </div>
                                <div>
                                    Тип
                                </div>
                                <div>
                                    Значение по умолчанию
                                </div>
                            </div>
                            <div class="doc-line" v-for="item in item1.documentation" :key="item.key">
                                <div>
                                    {{ item.title }}
                                </div>
                                <div>
                                    {{ item.type }}
                                </div>
                                <div>
                                    {{ item.default }}
                                </div>
                            </div>
                        </div>
                    </div>

                </vscode-panel-view>
            </template>>

            <vscode-panel-tab id="tab-add">Добавить</vscode-panel-tab>
            <vscode-panel-view id="view-add">



            </vscode-panel-view>
        </vscode-panels>


    </div>
</template>

<script setup lang="ts">
import { actions, events, type AppAction, getEmptyAction } from "@/data";
import { onMounted, ref, watch, type Ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const item: Ref<AppAction> = ref(getEmptyAction());

watch(() => route.params.key, () => {
    updAction()
});

onMounted(() => {
    updAction()
});

function updAction() {
    item.value = actions.value.find((item) => item.key === route.params.key) || getEmptyAction();
}


function handleChangeTab(e: any) {
    console.log(e);
}

function getJsonStr(str: string) {
    try {
        return JSON.stringify(JSON.parse(str), null, 2)
    }
    catch (e) {
        return str
    }
}

</script>

<style lang="scss">
.header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem
}

.wrap-tab-data {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;

    .doc {
        padding-top: 5px;
        .doc-line {
            padding-top: 2px;

            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
         
            div {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            &.title {
                font-weight: bold;
            }
        }
    }
}
</style>