import { api } from "~/trpc/server";


const TestPage = async () => {
    const response = await api.post.getSuggestion.query();
    console.log(response)

    return (
        <div className="w-full h-screen flex items-center justify-between">
            <h1 className="text-4xl">
                Test Page for API
            </h1>
        </div>
    );

};


export default TestPage;