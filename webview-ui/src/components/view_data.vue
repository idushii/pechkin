<template>
    <div>
        <div class="header">
            <vscode-text-field :value="item.name" placeholder="Наименование"></vscode-text-field>
            <vscode-text-field :value="item.title" placeholder="Заголовок"></vscode-text-field>
        </div>
        <vscode-panels activeid="tab-1" aria-label="With Active Tab" @change="handleChangeTab">
            <template v-for="item1 of item.payloads">
                <vscode-panel-tab :id="`tab-${item1.name}`">{{ item1.title }}</vscode-panel-tab>
                <vscode-panel-view :id="`view-${item1.name}`">
                    <div class="wrap-tab-data">
                        <vscode-text-area class="wrap-payload" :value="getJsonStr(item1.payload)" resize="vertical"
                            rows="30"></vscode-text-area>
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
                                <div>
                                    Nullable
                                </div>
                            </div>
                            <div class="doc-line" v-for="item in item1.documentation" :key="item.key">
                                <div>
                                    <vscode-text-field class="doc-item" :value="item.title"></vscode-text-field>
                                </div>
                                <div>
                                    <vscode-dropdown class="doc-item" :value="item.type">
                                        <vscode-option>int</vscode-option>
                                        <vscode-option>float</vscode-option>
                                        <vscode-option>string</vscode-option>
                                        <vscode-option>boolean</vscode-option>
                                        <vscode-option>bytes</vscode-option>
                                        <vscode-option>string[]</vscode-option>
                                        <vscode-option>int[]</vscode-option>
                                    </vscode-dropdown>

                                </div>
                                <div>
                                    <vscode-text-field class="doc-item" :value="item.default"></vscode-text-field>
                                </div>
                                <div>
                                    <vscode-checkbox class="doc-item" :checked="item.nullable"></vscode-checkbox> 
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

    .wrap-payload {
        --type-ramp-base-line-height: 22px;

    }

    .doc {
        padding-top: 14px;

        .doc-line {
            padding-top: 2px;

            display: grid;
            grid-template-columns: 120px 100px 1fr auto;
            grid-gap: 5px;

            div {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;

                --design-unit: 2;
                --type-ramp-base-font-size: 12px;
                --input-height: 18;

            }

            &.title {
                font-weight: bold;
            }
        }
    }
}

vscode-dropdown {
    position: absolute;
    width: 100px;
}
</style>