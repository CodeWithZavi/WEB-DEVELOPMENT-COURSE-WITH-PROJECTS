import java.util.ArrayList;
import java.util.Scanner;

class Student {
    String id;
    String name;
    double cgpa;

    Student(String id, String name, double cgpa) {
        this.id = id;
        this.name = name;
        this.cgpa = cgpa;
    }
}

public class StudentRecords {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayList<Student> students = new ArrayList<>();

        System.out.print("Enter the number of students\n");
        int NoOFStu = scanner.nextInt();
        scanner.nextLine();

        for (int i = 0; i < NoOFStu; i++) {
            System.out.println("Enter details for student " + (i + 1) + ":");
            System.out.print("Enter ID ");
            String id = scanner.nextLine();
            System.out.print("Enter Name ");
            String name = scanner.nextLine();
            System.out.print("Enter CGPA ");
            double cgpa = scanner.nextDouble();
            scanner.nextLine();

            students.add(new Student(id, name, cgpa));
        }

        System.out.println("\nStudents with CGPA greater than 2.5 are : ");
        for (Student student : students) {
            if (student.cgpa > 2.5) {
                System.out.println("ID: " + student.id + ", Name: " + student.name + ", CGPA: " + student.cgpa);
            }
        }

        int nomanCount = 0;
        for (Student student : students) {
            if (student.name.equalsIgnoreCase("noman")) {
                nomanCount++;
            }
        }
        System.out.println("\nNumber of students with the name 'Noman': " + nomanCount);

    }
}
