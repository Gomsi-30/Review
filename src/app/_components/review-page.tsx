import Image from 'next/image';
import { CircleX } from 'lucide-react';

const Review = () => {
    return (
        <div className="container p-4">
            <CircleX />
            <h1 className="text-3xl font-bold mb-6">Leave a review</h1>
            <hr></hr>
            <main className="flex flex-col gap-7 p-4 rounded-lg">
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Safety</h2>
                    <p className="mb-2">How much you will rate us in safety from 5-star?</p>
                    <div className="flex flex-wrap gap-2">
                        {[...Array(5)].map((_, index) => (
                            <Image
                                key={index}
                                src="https://img.freepik.com/free-vector/start_53876-25533.jpg?size=626&ext=jpg&ga=GA1.1.1190764250.1709451892&semt=ais_user"
                                width={70}
                                height={70}
                                alt="Currently not working"
                                className="w-16 h-16 sm:w-18 sm:h-18 transition duration-300 transform hover:scale-110"
                            />
                        ))}
                    </div>
                </div>
                <hr></hr>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Communication</h2>
                    <p className="mb-2">How much you will rate us in communication from 5-star?</p>
                    <div className="flex flex-wrap gap-2">
                        {[...Array(4)].map((_, index) => (
                            <Image
                                key={index}
                                src="https://img.freepik.com/free-vector/start_53876-25533.jpg?size=626&ext=jpg&ga=GA1.1.1190764250.1709451892&semt=ais_user"
                                width={70}
                                height={70}
                                alt="Currently not working"
                                className="w-16 h-16 sm:w-18 sm:h-18 transition duration-300 transform hover:scale-110"
                            />
                        ))}
                        <Image
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAgq_D_k6AeQr6fDfIuieppX45iij5NHkpjA&s"
                            width={70}
                            height={70}
                            alt="Currently not working"
                            className="w-16 h-16 sm:w-18 sm:h-18 transition duration-300 transform hover:scale-110"
                        />
                    </div>
                </div>
                <hr></hr>
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Would you recommend Trausati?</h2>
                    <p className="mb-2">If you recommend, tick yes?</p>
                    <div className="flex flex-wrap gap-12 mt-4">
                        <Image
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR987ARDKK6JQwM0TSuJiZizuXXd1XNG1veCQ&s"
                            width={70}
                            height={70}
                            alt="Yes"
                            className="w-16 h-16 sm:w-18 sm:h-18 transition duration-300 transform hover:scale-110"
                        />
                        <Image
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5QyeUy9wDpn21P9RuJ3s9tgU0eFGgUybDSw&s"
                            width={70}
                            height={70}
                            alt="No"
                            className="w-16 h-16 sm:w-18 sm:h-18 transition duration-300 transform hover:scale-110"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Review;
