import { create } from "zustand"


type pageOptions = 'DASHBOARD' | 'INTEGRATIONS' | 'SETTINGS' | 'CALENDAR' | 'TIMEOFF' | 'PROJECTS' | 'TEAMS' | 'BENEFITS' | 'DOCUMENTS' | 'SUPPORT'

interface centralStore {
    activePage: pageOptions
    setActivePage: (page: pageOptions) => void

    isSidebarOpen: boolean
    toggleSidebar: () => void
}

export const useCentralStore = create<centralStore>((set, get) => ({
    activePage: 'DASHBOARD',
    setActivePage: (page) => set({ activePage: page }),

    isSidebarOpen: false,
    toggleSidebar: () => set({ isSidebarOpen: !get().isSidebarOpen }),
}))