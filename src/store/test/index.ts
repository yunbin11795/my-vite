interface testType {
    count:number
}

export default {
    namespaced:true,
    state: () => ({
        count: 0
    }),
    mutations: {
        increment (state:testType) {
            // 这里的 `state` 对象是模块的局部状态
            state.count++
        }
    },

    getters: {
        doubleCount(state:testType) {
            return state.count * 2
        }
    },

    action:{

    }
}
