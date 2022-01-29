import MEffectiveView from '@/models/effectiveView';
import MTagView from '@/models/tagView';

interface State {
    currentRoute?: MTagView;
    visitedRoutes: MTagView[];
}

const state = (): State => ({
    currentRoute: undefined,
    visitedRoutes: [],
});

const getters = {
    currentRoute(state: State) {
        return state.currentRoute;
    },

    visitedRoutes(state: State) {
        return state.visitedRoutes;
    },
};

const mutations = {
    setCurrentRoute(state: State, {name: route, path,}: {name: string , path: string}) {
        const found = MEffectiveView.views.find((item) => item.name === route);
        if (found !== undefined) {
            state.currentRoute = {
                path,
                view: found,
            };
        }
    },

    addVisitedRoute(state: State, {name, path,}: {name: string , path: string}) {
        const visitedRoutesFound = state.visitedRoutes.find((item) => item.path === path);
        if (visitedRoutesFound === undefined) {
            const found = MEffectiveView.views.find((item) => item.name === name);
            if (found !== undefined) {
                state.visitedRoutes.push({
                    path,
                    view: found,
                });
            }
        }
    },

    removeVisitenRoute(state: State, path: string) {
        const index: number = state.visitedRoutes.findIndex((item) => item.path === path);
        if (index !== -1) {
            state.visitedRoutes.splice(index, 1);
        }
    },

    removeOhterRoutes(state: State, route: MTagView) {
        state.visitedRoutes = [route,];
    },

    removeAllRoutes(state: State) {
        state.visitedRoutes = [];
        state.currentRoute = undefined;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
};
