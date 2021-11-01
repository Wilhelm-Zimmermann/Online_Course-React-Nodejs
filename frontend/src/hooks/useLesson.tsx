import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

interface CreateLessonData {
    name: string;
    module_id: string;
    event_date: string;
}

interface LessonReponse {
    id: string;
    name: string;
    module_id: string;
    event_date: string;
    create_at: Date;
}

interface UpdateLessonData {
    id: string;
    name: string;
    event_date: string;
}

interface LessonProviderProps {
    children: ReactNode
}

interface LessonContextData {
    lessons: LessonReponse[];
    findLessonsPerModule: (id: string) => Promise<LessonReponse[]>;
    createLesson: (data: CreateLessonData) => Promise<void>;
    updateLesson: (data: UpdateLessonData) => Promise<void>;
    deleteLesson: (id: string) => Promise<void>;
}

const LessonContext = createContext<LessonContextData>({} as LessonContextData);

export const LessonProvider = ({ children }: LessonProviderProps) => {
    const [lessons, setLessons] = useState<LessonReponse[]>([])

    const findLessonsPerModule = async (id: string) => {
        try {
            const lessons = await api.get<LessonReponse[]>("/lesson/module/" + id);
            setLessons(lessons.data);
            return lessons.data;
        } catch {
            toast.error("NONONO")
        }
    }

    const createLesson = async ({ name, event_date, module_id }: CreateLessonData) => {
        try {
            await api.post("/lesson", {
                name,
                module_id,
                event_date
            });

        } catch(err) {
            toast.error(err)
        }
    }

    const updateLesson = async ({ name, event_date, id }: UpdateLessonData) => {
       
            const date = event_date.replaceAll("-", "/");
            console.log(name);
            await api.put("/lesson/" + id, {
                name,
                event_date: date
            }).then(resp => console.log(resp.data))
            .catch(err => console.log(err))
        
    }

    const deleteLesson = async (id: string) => {
        try {
            await api.delete("/lesson/" + id);
        } catch {
            toast.error("DEL")
        }
    }

    return (
        <LessonContext.Provider value={{
            lessons,
            findLessonsPerModule,
            createLesson,
            updateLesson,
            deleteLesson
        }}>
            {children}
        </LessonContext.Provider>
    )
}

export function useLesson() {
    const context = useContext(LessonContext);

    return context;
}