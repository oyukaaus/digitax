import SingleProcessV1 from "./SingleProcessV1";
import ProcessV1Data from "@/assets/jsonData/process/ProcessV1Data.json";

const ProcessV1 = () => {
    return (
        <>
            <div className="process-style-one">
                {ProcessV1Data.map(process =>
                    <SingleProcessV1 process={process} key={process.id} />
                )}
            </div>
        </>
    );
};

export default ProcessV1;