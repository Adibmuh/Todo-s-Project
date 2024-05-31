import axiosInstance from "@/api/axiosInstance";

const TodoService = () => {
    const getAll = async () => {
        const { data } = await axiosInstance.get("/todos");
        return data;
    };

    return { getAll };
};

export default TodoService;
