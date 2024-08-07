# Job Vacancy Management System

## Overview

This is a simple Job Vacancy Management System implemented in JavaScript. The application allows users to create, list, view, register candidates, and delete job vacancies. It uses basic JavaScript functions and prompts to interact with the user.

## Features

- **List Job Vacancies:** Displays all available job vacancies with their index and number of candidates.
- **Create New Vacancy:** Allows users to add a new job vacancy with details like name, description, and deadline.
- **View Vacancy Details:** Shows detailed information of a specific job vacancy including the list of registered candidates.
- **Register Candidate:** Enables users to register a candidate for a specific job vacancy.
- **Delete Vacancy:** Provides an option to delete a job vacancy after user confirmation.
- **Exit Program:** Option to exit the program.

## How to Use

1. **List Job Vacancies**
   - Select option `1` from the menu to view all job vacancies with their index and number of candidates.

2. **Create New Vacancy**
   - Select option `2` to create a new job vacancy.
   - Provide the vacancy details (name, description, deadline) and confirm.

3. **View Vacancy Details**
   - Select option `3` to view detailed information of a specific job vacancy by entering its index.

4. **Register Candidate**
   - Select option `4` to register a candidate for a job vacancy.
   - Enter the candidate's name and the vacancy index, then confirm the registration.

5. **Delete Vacancy**
   - Select option `5` to delete a job vacancy.
   - Confirm the deletion after reviewing the vacancy details.

6. **Exit Program**
   - Select option `6` to exit the program.

## Code Structure

- **`criarVaga(nomeVaga, descricaoVaga, dataLimite)`**: Creates a new job vacancy and adds it to the `vagas` array.
- **`listarVaga()`**: Lists all job vacancies with their index and number of candidates.
- **`inscreverCandidato()`**: Registers a candidate for a job vacancy.
- **`visualizarVaga()`**: Displays detailed information about each job vacancy.
- **`excluirVaga()`**: Deletes a job vacancy after user confirmation.
- **`do-while` Loop**: Manages the user menu and executes the selected options until the user decides to exit.

## Example Usage

1. **List Vacancies**
   - Select `1` to see all available job vacancies.

2. **Create Vacancy**
   - Input the job details and create a new vacancy.

3. **View Vacancy**
   - Input the index of a job vacancy to view detailed information.

4. **Register Candidate**
   - Register a candidate for a specific job vacancy by providing the candidate’s name and the job index.

5. **Delete Vacancy**
   - Confirm deletion of a specific job vacancy after reviewing its details.

6. **Exit Program**
   - Select `6` to exit the application.

## Contribution

Feel free to fork the repository, make changes, and submit pull requests. Suggestions and improvements are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
