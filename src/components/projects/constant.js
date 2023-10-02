export const projects = [
    {
        id: 'k_means',
        title: 'K Means Clustering',
        description: 'Classifying flower types using K Means Clustering.',
        skills: ['Python', 'Machine Learning'],
        images: ['/assets/k_means/clusters.png', '/assets/k_means/convergence.png'],
        "text_sections": [
            {
                "title": "Abstract",
                "body": "K Means Clustering project is a machine learning model designed to classify different flower types efficiently and accurately. Utilizing Python, it automates the classification process, providing quick and reliable results."
            },
            {
                "title": "Problem",
                "body": "Classifying flower types manually is a time-consuming and error-prone task, leading to inaccuracies and inefficiencies in various applications such as botanical research and flower breeding."
            },
            {
                "title": "Solution",
                "body": "By employing K Means Clustering, the project automates and enhances the accuracy of flower type classification, ensuring reliable results for further research and analysis."
            },
            {
                "title": "Technical Specifications",
                "body": "The project is developed using Python, leveraging its extensive libraries and tools for efficient machine learning and data processing."
            },
            {
                "title": "Implementation",
                "body": `
                    import pandas as pd
                    import numpy as np
                    import matplotlib.pyplot as plt

                    # set 3 random initial centroids
                    def centroid_initialisation(k, data):
                        centroids = data.sample(k)
                        return centroids

                    # calculate the distance between two vectors
                    def calc_distance(vector1, vector2):
                        return np.sqrt(np.sum((vector1 - vector2)**2))

                    # assign each observation to the nearest centroid
                    def centroid_assign(data, centroids, k):
                        # get length of data
                        n = data.shape[0]
                        # store new assignements
                        assignation = []
                        # store new assignement errors
                        assign_errors = []

                        # iterate over data points
                        for point in range(n):
                            # calculate the distance between the point and each centroid
                            all_errors = np.array([])
                            for centroid in range(k):
                                err = calc_distance(centroids.iloc[centroid, :].iloc[:4], data.iloc[point,:].iloc[:4])
                                all_errors = np.append(all_errors, err)

                            # find the closest centroid
                            closest_centroid =  np.where(all_errors==np.amin(all_errors))[0].tolist()[0]
                            closest_centroid_error = np.amin(all_errors)

                            # store the new assignement
                            assignation.append(closest_centroid)
                            assign_errors.append(closest_centroid_error)

                        return assignation, assign_errors

                    # kmeans driver algoirthm
                    def kmeans(data, k, max_iterations):
                        # initialise the centroids
                        centroids = centroid_initialisation(k, data)
                        
                        # Store the error at each iteration
                        error_history = []
                        
                        # iterate until maximum number of iterations is reached
                        for iter in range(max_iterations):
                            # assign each data point to the nearest centroid
                            data['centroid'], data['error'] = centroid_assign(data, centroids, k)
                            
                            # add the total error for this iteration to the error history
                            error_history.append(data['error'].sum())
                            
                            # update the centroids
                            new_centroids = data.groupby('centroid')[feature_names].mean()
                            # check if the centroids have changed
                            if centroids.equals(new_centroids):
                                break
                            centroids = new_centroids
                            
                        return data, centroids, error_history

                    # read the iris data
                    data = pd.read_csv('data/iris.csv')
                    feature_names = data.keys()
                    X = data.iloc[:, 0:4].to_numpy()

                    # clusters
                    k = 3
                    # iterations
                    max_iterations = 10
                    # run kmeans
                    for run in range(1, 11):
                        clustered_data, final_centroids, error_history = kmeans(data, k, max_iterations)

                        # plot the convergence
                        plt.figure()
                        plt.plot(error_history, '-o')
                        plt.xlabel("Iteration")
                        plt.ylabel("Error")
                        plt.title(f"K-means Convergence (Run {run})")
                        plt.savefig(f"convergence_run_{run}.png")  # Save the plot
                        plt.close()  # Close the current figure

                        # plot the data
                        plt.figure()
                        ax = plt.axes(projection='3d')
                        scatter = ax.scatter(X[:, 0], X[:, 1], X[:, 2], c=clustered_data['centroid'], cmap='viridis')
                        ax.set_xlabel(feature_names[0])
                        ax.set_ylabel(feature_names[1])
                        ax.set_zlabel(feature_names[2])
                        plt.colorbar(scatter, ax=ax, label='Cluster')
                        plt.title(f"K-means Clusters (Run {run})")
                        plt.savefig(f"clusters_run_{run}.png")  # Save the plot
                        plt.close()  # Close the current figure
                    `,
                    isCode: true,
                    language: 'python'
            }
        ]
    },
    {
        id: 'image_compressions',
        title: 'SVD Image Compression',
        description: 'Compressing images using Singular Value Decomposition.',
        skills: ['Python', 'Machine Learning'],
        images: ['/assets/image_compression/results.png'],
        "text_sections": [
            {
                "title": "Abstract",
                "body": "The SVD Image Compression project utilizes Singular Value Decomposition to efficiently compress images without significant loss in quality. This Python-based project optimizes image storage and transmission while maintaining visual fidelity."
            },
            {
                "title": "Problem",
                "body": "Storing and transmitting high-resolution images require substantial bandwidth and storage space, leading to increased costs and reduced efficiency."
            },
            {
                "title": "Solution",
                "body": "SVD Image Compression provides an effective solution for reducing the size of images, ensuring efficient storage and transmission while preserving essential visual information."
            },
            {
                "title": "Technical Specifications",
                "body": "Developed in Python, the project leverages advanced mathematical techniques for optimal image compression results."
            },
            {
                "title": "Implementation",
                "body": `
                    import numpy as np
                    import pandas as pd
                    from sklearn.metrics import confusion_matrix

                    # load data
                    train_data = pd.read_csv('mnist_train.csv')
                    test_data = pd.read_csv('mnist_test.csv')

                    # extract features and labels data
                    X_train = train_data.iloc[:, 1:].to_numpy() / 255.0
                    y_train = train_data.iloc[:, 0].to_numpy()
                    X_test = test_data.iloc[:, 1:].to_numpy() / 255.0
                    y_test = test_data.iloc[:, 0].to_numpy()

                    # generate the truncated SVD of the (transposed) data matrix

                    from sklearn.decomposition import TruncatedSVD

                    svd = TruncatedSVD(n_components=50)
                    X_train_reduced = svd.fit_transform(X_train)
                    X_test_reduced = svd.transform(X_test)

                    # test the quality of the representation by reconstructing a few randomly chosen examples.
                    # do this qualitatively by taking a few images, projecting them onto the latent space and reconstruct the images from the latent space.

                    X_train_reconstructed = svd.inverse_transform(X_train_reduced)
                    import matplotlib.pyplot as plt

                    num_images = 5
                    indices = np.random.choice(len(X_train), num_images)

                    for i, index in enumerate(indices):
                        plt.subplot(2, num_images, i + 1)
                        plt.imshow(X_train[index].reshape(28, 28), cmap='gray')
                        plt.title("Original")
                        plt.subplot(2, num_images, num_images + i + 1)
                        plt.imshow(X_train_reconstructed[index].reshape(28, 28), cmap='gray')
                        plt.title("Reconstructed")
                    plt.tight_layout()
                    plt.show()

                    # what quantitative metric could you use to assess the quality of the laten representation

                    mse = np.mean((X_train - X_train_reconstructed)**2)
                    print(f"Mean Squared Error: {mse}")
                    `,
                    isCode: true,
                    language: 'python'
            }
        ]
    },
    {
        id: 'spectral_clustering',
        title: 'Spectral Clustering',
        description: 'Identifying spirals using Spectral Clustering.',
        skills: ['Python', 'Machine Learning'],
        images: ['/assets/spectral_clustering/results.png'],
        "text_sections": [
            {
                "title": "Abstract",
                "body": "The Spectral Clustering project is a machine learning initiative aimed at identifying spirals using spectral clustering techniques. Built with Python, it ensures accurate and efficient identification for further analysis and study."
            },
            {
                "title": "Problem",
                "body": "Identifying specific patterns such as spirals in large datasets is a complex and time-consuming task when performed manually."
            },
            {
                "title": "Solution",
                "body": "The Spectral Clustering project automates the identification process, ensuring quick, accurate, and efficient results, aiding further research and analysis in various fields."
            },
            {
                "title": "Technical Specifications",
                "body": "Utilizing Python, the project leverages advanced machine learning algorithms for optimal pattern identification results."
            },
            {
                "title": "Implementation",
                "body": `
                    import numpy as np
                    import numpy.linalg as la
                    import matplotlib.pyplot as plt
                    from sklearn.cluster import KMeans

                    def sample_spiral():
                        points_per_cluster = 500
                        bandwidth = 0.1
                        data = np.empty((points_per_cluster, 2))
                        w = np.arange(1, points_per_cluster + 1).astype(np.float32) / points_per_cluster
                        data[:,0] = (4 * w + 1) * np.cos(2*np.pi * w) + np.random.randn(points_per_cluster) * bandwidth
                        data[:,1] = (4 * w + 1) * np.sin(2*np.pi * w) + np.random.randn(points_per_cluster) * bandwidth
                        data = np.vstack((data, -data))
                        return data

                    X = sample_spiral()
                    N = X.shape[0]

                    # k-means
                    kmeans = KMeans(n_clusters=2)
                    y_kmeans = kmeans.fit_predict(X)

                    # parameter
                    sigma = 0.1

                    # affinity matrix
                    def compute_affinity(X, sigma):
                        N = X.shape[0]
                        W = np.zeros((N, N))
                        for i in range(N):
                            for j in range(N):
                                if i != j:
                                    diff = X[i] - X[j]
                                    W[i, j] = np.exp(-la.norm(diff)**2 / (2 * sigma**2))
                        return W

                    W = compute_affinity(X, sigma)

                    # degree matrix
                    D = np.diag(np.sum(W, axis=1))

                    # normalized laplaian matrix
                    D_inv_sqrt = np.diag(1.0 / np.sqrt(np.diag(D)))
                    L = np.eye(N) - np.dot(D_inv_sqrt, np.dot(W, D_inv_sqrt))

                    # eigenvectors
                    eigenvalues, eigenvectors = la.eigh(L)

                    # second smallest eigenvector
                    Y = eigenvectors[:, 1]

                    # spectral clustering
                    kmeans = KMeans(n_clusters=2)
                    y_spectral = kmeans.fit_predict(Y.reshape(-1, 1))

                    # plots
                    plt.figure(figsize=(12, 6))

                    # k-means
                    plt.subplot(1, 2, 1)
                    plt.scatter(X[:, 0], X[:, 1], s=10, c=y_kmeans)
                    plt.title("K-means Clustering")
                    plt.axis('square')

                    # spectral clustering
                    plt.subplot(1, 2, 2)
                    plt.scatter(X[:, 0], X[:, 1], s=10, c=y_spectral)
                    plt.title("Spectral Clustering")
                    plt.axis('square')

                    plt.tight_layout()
                    plt.show()
                    `,
                    isCode: true,
                    language: 'python'
            }
        ]
    },
    {
        id: 'facial_reconstruction',
        title: 'Facial Reconstruction',
        description: 'Reconstructing faces using Principal Component Analysis.',
        skills: ['Python', 'Machine Learning'],
        images: ['/assets/facial_reconstruction/averages.png', '/assets/facial_reconstruction/face_10.png', '/assets/facial_reconstruction/projections.png', '/assets/facial_reconstruction/singular_vals.png'],
        "text_sections": [
            {
                "title": "Abstract",
                "body": "The Facial Reconstruction project employs Principal Component Analysis to reconstruct faces effectively. This Python-based project enhances the field of facial recognition and reconstruction, providing accurate and reliable results."
            },
            {
                "title": "Problem",
                "body": "Traditional facial reconstruction methods can be time-consuming and may not always provide accurate results, impacting various applications such as forensic analysis and identification."
            },
            {
                "title": "Solution",
                "body": "By utilizing Principal Component Analysis, the Facial Reconstruction project ensures high accuracy and efficiency in reconstructing faces, contributing positively to various related fields."
            },
            {
                "title": "Technical Specifications",
                "body": "Developed using Python, the project employs advanced mathematical and machine learning techniques for optimal facial reconstruction results."
            },
            {
                "title": "Implementation",
                "body": `
                    import numpy as np 
                    import pandas as pd 
                    import matplotlib.pyplot as plt

                    df = pd.read_csv('./face_data.csv')
                    A = df.iloc[:,:4096].to_numpy().transpose()

                    # display the 10th image in the data set
                    imag = A[:, 9].reshape((64,64))
                    plt.imshow(imag, cmap='gray')
                    plt.show()

                    # computer the mean of every row and subtract it from the data matrix.

                    mean_face = np.mean(A, axis=1).reshape(-1, 1)
                    A_demeaned = A - mean_face

                    # compute the SVD of the de-meaned data matrix.

                    U, S, Vt = np.linalg.svd(A_demeaned, full_matrices=False)

                    # plot the resulting singular values on a semilogy plot.

                    plt.semilogy(S)
                    plt.title("Singular Values")
                    plt.xlabel("Singular value index")
                    plt.ylabel("Singular value magnitude")
                    plt.show()

                    # display the first 6 singular vectors.

                    for i in range(6):
                        plt.subplot(2, 3, i+1)
                        plt.imshow(U[:, i].reshape(64, 64), cmap='gray')
                        plt.title(f"Singular Vector {i+1}")
                    plt.tight_layout()
                    plt.show()

                    # truncate the SVD to use the first 50 singular values and vectors to approximate the data.

                    k = 50
                    A_approx = np.dot(U[:, :k], np.dot(np.diag(S[:k]), Vt[:k, :]))

                    # write an expression for the root mean square error introduced by this approximation

                    rmse = np.sqrt(np.mean((A - A_approx)**2))
                    print(f"Root Mean Square Error: {rmse}")

                    # express a face f in terms of a vector y by projection

                    face_index = 9  # for the 10th face
                    y = np.dot(U[:, :k].T, A[:, face_index])

                    # project a few faces on this basis and reconstruct them from computed coordinates

                    num_faces = 5
                    for i in range(num_faces):
                        y_i = np.dot(U[:, :k].T, A[:, i])
                        face_reconstructed = np.dot(U[:, :k], y_i).reshape(-1, 1) + mean_face
                        plt.subplot(1, num_faces, i+1)
                        plt.imshow(face_reconstructed.reshape(64, 64), cmap='gray')
                        plt.title(f"Face {i+1}")
                    plt.tight_layout()
                    plt.show()
                    `,
                    isCode: true,
                    language: 'python'
            }
        ]
    },
    {
        id: 'organiser',
        title: 'Organiser Web App',
        description: 'Web application to help busy people manage tasks and recognise bad habits.',
        skills: ['ReactJs', 'JavaScript', 'AWS', 'Python'],
        images: ['/assets/organiser_1.png', '/assets/organiser_2.png', '/assets/organiser_3.png'],
        text_sections: [
            {
                title: 'Abstract',
                body: 'The Organiser Web App is a cutting-edge solution designed to assist individuals in managing their daily tasks and identifying detrimental habits. In today’s fast-paced world, keeping track of daily activities and responsibilities is a significant challenge. The Organiser Web App employs artificial intelligence to analyze and understand user habits, offering a tailored and efficient organizational experience.'
            },
            {
                title: 'Problem',
                body: 'The modern lifestyle is filled with numerous tasks and responsibilities, making it difficult for individuals to maintain a structured and organized routine. Traditional organizer applications lack dynamic features, requiring users to manually input data, leading to inconsistent usage and a lack of personalization. These applications do not offer insights into user habits, hindering the identification and improvement of daily routines.'
            },
            {
                title: 'Solution',
                body: 'The Organiser Web App addresses these issues by seamlessly integrating AI capabilities. It automatically monitors user activities, utilizing machine learning algorithms to discern recurring habits and patterns. The app provides personalized suggestions, timely reminders, and valuable insights, empowering users to enhance their daily routines and efficiently attain their goals.'
            },
            {
                title: 'Task Component Implementation',
                body: `
            const Task: FC<TaskProps> = ({title, category, startDate, endDate, index}) => {
            return (
                <Draggable draggableId={title} index={index}>
                {(provided) => (
                    <StyledStackCard ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <StyledTypographyTitle>{title}</StyledTypographyTitle>
                    <StyledChip label={category} />
                    <StyledStackTime direction='row'>
                        <StyledTypographyTimeTitle>From</StyledTypographyTimeTitle>
                        <StyledTypographyTime>{utcToTime(startDate)}</StyledTypographyTime>
                        <StyledTypographyTimeTitle>To</StyledTypographyTimeTitle>
                        <StyledTypographyTime>{utcToTime(endDate)}</StyledTypographyTime>
                    </StyledStackTime>
                    </StyledStackCard>
                )}
                </Draggable>
            );
            };

            export default Task;
                `,
                isCode: true,
                language: 'javascript'
            },
            {
                title: 'Technical Specifications',
                body: 'The Organiser Web App is a cross-platform application, available on both mobile (iOS & Android) and web platforms. It employs a deep learning-based Recurrent Neural Network (RNN) for sequence pattern recognition, ensuring accurate habit identification and analysis. The app integrates with device calendars, task lists, and various third-party applications, ensuring comprehensive data collection and user activity monitoring.'
            }
        ],
    },
    {
        id: 'dismantly',
        title: 'Dismantly Web App',
        description: 'Multi-tenant inventory management web application.',
        skills: ['ReactJs', 'JavaScript', 'AWS', 'Python'],
        images: ['/assets/dismantly/1.png', '/assets/dismantly/2.png', '/assets/dismantly/3.png', '/assets/dismantly/4.png', '/assets/dismantly/5.png'],
        "text_sections": [
            {
                "title": "Abstract",
                "body": "In the realm of inventory management, efficiency and accuracy are paramount. The Dismantly Web App is a multi-tenant inventory management web application designed to streamline the process of inventory management, making it easier for businesses to keep track of their inventory, reduce errors, and optimize warehouse organization."
            },
            {
                "title": "Problem",
                "body": "Traditional inventory management systems often involve manual processes that are time-consuming and prone to error. Additionally, these systems may not scale well with the growth of the business, leading to increased complexity, inefficiency, and the potential for significant losses due to mismanagement of inventory."
            },
            {
                "title": "Solution",
                "body": "The Dismantly Web App addresses these challenges by providing a robust, scalable, and user-friendly platform for inventory management. Built using ReactJs and Python and hosted on AWS, the application offers high performance, reliability, and security. Users can easily track, manage, and analyze their inventory, ensuring that the right products are in the right place at the right time."
            },
            {
                "title": "Technical Specifications",
                "body": "The Dismantly Web App is built using cutting-edge technologies including ReactJs for the frontend, Python for backend processing, and AWS for hosting and other cloud services. This technology stack ensures seamless operation, high availability, and consistent performance, meeting the demands of modern businesses."
            }
        ]
    },
    {
        id: 'dismantly_mobile',
        title: 'Dismantly Mobile App',
        description: 'Manage your inventory and business on the go.',
        skills: ['Flutter', 'Dart'],
        images: ['/assets/dismantly_mobile/1.png', '/assets/dismantly_mobile/2.png', '/assets/dismantly_mobile/3.png', '/assets/dismantly_mobile/4.png', '/assets/dismantly_mobile/5.png', '/assets/dismantly_mobile/6.png'],
        "text_sections": [
            {
                "title": "Abstract",
                "body": "In today's fast-paced world, managing inventory and business operations should not be confined to a desk. The Dismantly Mobile App breaks these boundaries by offering a comprehensive inventory management solution on the go. This mobile application, built with Flutter and Dart, allows users to seamlessly manage their inventory, track orders, and oversee business operations from anywhere, ensuring that business owners stay in control and make informed decisions even while away from the business premises."
            },
            {
                "title": "Problem",
                "body": "Inventory management for businesses often requires constant attention and oversight. Traditional systems that are confined to desktop applications or paper-based methods limit the flexibility and mobility of business owners and managers. This limitation can lead to delayed decisions, inefficient operations, and potential losses due to the lack of real-time inventory oversight."
            },
            {
                "title": "Solution",
                "body": "The Dismantly Mobile App is the answer to these challenges. It provides a robust and user-friendly mobile platform for real-time inventory management. Users can add, update, and monitor inventory items, track orders, and get insights into inventory status and trends, all from their mobile devices. The app's intuitive interface and efficient design ensure that even complex inventory tasks can be handled smoothly on the go."
            },
            {
                "title": "Technical Specifications",
                "body": "The Dismantly Mobile App is built using Flutter for cross-platform compatibility, ensuring that the app runs smoothly on both Android and iOS devices. Dart, a robust and efficient language, is used for coding the app, ensuring optimal performance and reliability. The app is designed with a focus on user experience, ensuring that inventory management tasks are straightforward and hassle-free."
            }
        ]
    },
    {
        id: 'asterix',
        title: 'Asterix Web App',
        description: 'Educational web application to help teachers save time with test assigning and grading.',
        skills: ['ReactJ', 'JavaScript', 'AWS', 'Python'],
        images: ['/assets/asterix/1.png', '/assets/asterix/2.png', '/assets/asterix/3.png', '/assets/asterix/4.png', '/assets/asterix/5.png'],
        "text_sections": [
            {
                "title": "Abstract",
                "body": "The Asterix Web App is a cutting-edge educational platform designed to streamline the process of assigning and grading tests for teachers. In the educational sector, time is a precious resource, and the Asterix Web App is committed to ensuring that educators can focus on what matters most - teaching and nurturing students. This application is built using ReactJS, JavaScript, AWS, and Python, combining robust functionality with seamless, user-friendly navigation."
            },
            {
                "title": "Problem",
                "body": "Teachers often find themselves bogged down by the administrative task of assigning and grading tests. This time-consuming work detracts from their primary role as educators and mentors. Traditional methods of test management and grading are often manual, error-prone, and inefficient, leading to delays and potential inaccuracies in grading and feedback."
            },
            {
                "title": "Solution",
                "body": "The Asterix Web App offers an innovative solution to these challenges. It automates the process of test assignment and grading, allowing teachers to create, assign, and grade tests with ease. The application uses advanced algorithms to ensure accurate and fair grading, while also providing insightful analytics and feedback to help teachers enhance their teaching methods and test designs."
            },
            {
                "title": "Technical Specifications",
                "body": "The Asterix Web App is built using ReactJS for a responsive and dynamic user interface, ensuring compatibility and optimal performance across various devices and browsers. The backend is powered by Python, ensuring efficient data processing and handling. AWS is used for secure and scalable cloud hosting, ensuring that the application is always accessible and responsive, even with a large number of users."
            }
        ]
    },
    {
        id: 'xanta',
        title: 'Xanta Website',
        description: 'Website for gift giving and receiving.',
        skills: ['ReactJ', 'JavaScript'],
        images: ['/assets/xanta/1.png', '/assets/xanta/2.png', '/assets/xanta/3.png', '/assets/xanta/4.png', '/assets/xanta/5.png', '/assets/xanta/6.png', '/assets/xanta/7.png', '/assets/xanta/8.png', '/assets/xanta/9.png'],
        text_sections: [
            {
                "title": "Abstract",
                "body": "Xanta Website is a dedicated platform designed to simplify and enhance the experience of gift giving and receiving. Built with React and JavaScript, it provides a seamless and user-friendly interface for users to manage their gifting activities, ensuring that every occasion is celebrated with the perfect gift."
            },
            {
                "title": "Problem",
                "body": "The traditional process of gift giving can be filled with uncertainty, confusion, and lack of coordination, leading to unsatisfactory gifting experiences for both the giver and receiver."
            },
            {
                "title": "Solution",
                "body": "Xanta Website offers a centralized platform for users to easily find, select, and send gifts, ensuring that every gift is meaningful and appreciated. It also allows users to create wish lists, making it easier for others to choose the perfect gift."
            },
            {
                "title": "Technical Specifications",
                "body": "Built using ReactJ and JavaScript, the Xanta Website offers robust functionality and a responsive design, ensuring a seamless user experience across various devices and browsers."
            }
        ]

    },
    {
        id: 'recognition',
        title: 'Facial Recognition Web App',
        description: 'Recreational web application to recognise any face uploaded to it.',
        skills: ['AWS Rekognition', 'AWS Lambda', 'ReactJs', 'JavaScript', 'AWS', 'Python'],
        images: ['/assets/face_1.png'],
        text_sections: [
            {
                title: 'Abstract',
                body: 'In an era where technology is advancing rapidly, facial recognition has become a field of interest for many. The Facial Recognition Web App is a recreational application designed to identify faces uploaded to it, showcasing the power and efficiency of modern facial recognition technologies.'
            },
            {
                title: 'Objective',
                body: 'The main goal of the Facial Recognition Web App is to provide a platform where users can easily upload images and have the application recognize and identify faces in the images. This serves as a demonstration of the capabilities of facial recognition technology and its potential applications in various fields.'
            },
            {
                title: 'Technology Stack',
                body: 'The application is built using cutting-edge technologies including ReactJs for the frontend, and Python for backend processing. AWS services are used for scalable and robust cloud infrastructure, ensuring seamless performance and reliability.'
            },
            {
                title: 'Connect to AWS Rekognition',
                body: `
                    import boto3
                    import io
                    from PIL import Image

                    rekognition = boto3.client('rekognition', region_name='eu-west-2')
                    dynamodb = boto3.client('dynamodb', region_name='eu-west-2')

                    image_path = input("Enter path of the image to check: ")

                    image = Image.open(image_path)

                    # Convert the image to RGB mode if it is not already
                    if image.mode != "RGB":
                        image = image.convert("RGB")

                    stream = io.BytesIO()
                    image.save(stream, format="JPEG")
                    image_binary = stream.getvalue()

                    response = rekognition.search_faces_by_image(
                        CollectionId='computer-vision',
                        Image={'Bytes': image_binary}
                    )

                    found = False
                    for match in response['FaceMatches']:
                        print(match['Face']['FaceId'], match['Face']['Confidence'])

                        face = dynamodb.get_item(
                            TableName='computer-vision',
                            Key={'RekognitionId': {'S': match['Face']['FaceId']}}
                        )

                        if 'Item' in face:
                            print("Found Person: ", face['Item']['FullName']['S'])
                            found = True

                    if not found:
                        print("Person cannot be recognized")
                `,
                isCode: true,
                language: 'python'
            },
            {
                title: 'Challenges and Solutions',
                body: 'One of the main challenges in developing the Facial Recognition Web App was ensuring accurate and efficient face recognition. This was achieved by utilizing advanced machine learning algorithms and models, which were implemented and optimized by our skilled team of developers.'
            },
            {
                title: 'Conclusion',
                body: 'The Facial Recognition Web App stands as a testament to the advancements in facial recognition technology, offering users a firsthand experience of its capabilities. The application’s robust architecture, built with ReactJs, JavaScript, AWS, and Python, ensures optimal performance and a seamless user experience.'
            }
        ],
    }
];
