import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export interface ModuleState {
    id: string;
    name: string;
}

interface ModulesProviderProps {
    children: ReactNode;
}

interface ModuleResponse {
    modules: ModuleState[]
}

interface CreateModule {
    name: string;
}

type UpdateModule = ModuleState;

interface ModulesContextData {
    modules: ModuleState[];
    getOneModule: (id: string) => Promise<ModuleState>;
    createModule: (data: CreateModule) => Promise<void>;
    updateModule: (data: UpdateModule) => Promise<void>;
    deleteModule: (id: string) => Promise<void>;
    countLessonsInModule: (id: string) => Promise<number>;
}


const ModulesContext = createContext<ModulesContextData>({} as ModulesContextData);

export const ModulesProvider = ({ children }: ModulesProviderProps) => {
    const [ modules, setModules ] = useState<ModuleState[]>([]);

    const getModules = async () => {
        api.get<ModuleResponse>("module")
            .then(resp => setModules(resp.data.modules))
            .catch(_ => console.log("LIXOOOOOOO de ERO"));
    }

    useEffect(() => {
        getModules();
    }, [])

    const getOneModule = async (id: string) => {
        try {
            const module = await api.get<ModuleState>(`module/${id}`);
            return module.data;

        }catch {
            toast.error("GET ONE MODULE")
        }
    }

    const createModule = async ({ name }: CreateModule) => {
        api.post("module", {
            name
        })
        .then(_ => console.log("Ok"))
        .catch(_ => console.log("NAOOOOOOOOOOOOOOOOO"))
    }

    const updateModule = async ({ id, name }: UpdateModule) => {
        api.put(`module/${id}`,{
            name
        })
        .then(_ => console.log("Ok"))
        .catch(_ => console.log("NAOOOOOOOOOOOOOOOOO"))
    }

    const deleteModule = async (id: string) => {
        api.delete(`module/${id}`)
        .then(_ => console.log("Ok"))
        .catch(_ => console.log("NAOOOOOOOOOOOOOOOOO"))
    }

    const countLessonsInModule = async (id: string) => {
        try {
            const lessonNumber = await api.get<number>(`lesson/count/${id}`);

            return lessonNumber.data;
        } catch {
            toast.error("Erro em encontrar Aulas para este módulo");
        }
    }

    return (
        <ModulesContext.Provider 
        value={{ 
            modules, 
            createModule, 
            updateModule, 
            deleteModule, 
            getOneModule, 
            countLessonsInModule 
        }}>
            {children}
        </ModulesContext.Provider>
    )
}

export function useModules() {
    const context = useContext(ModulesContext);

    return context;
}