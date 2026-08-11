class Movie {
    String movieName;
    int totalSeats;
    int availableSeats;
    int ticketPrice;

    Movie(String name, int total, int price) {
        movieName = name;
        totalSeats = total;
        availableSeats = total;
        ticketPrice = price;
    }

    void bookTicket(int seats) {
        if (seats <= availableSeats) {
            availableSeats = seats;
            int amount = seats * ticketPrice;
            System.out.println(seats + " tickets booked for " + movieName);
            System.out.println("Total amount: " + amount);
        } else {
            System.out.println("Booking failed! Not enough seats for " + movieName);
        }
    }

    void cancelTicket(int seats) {
        int bookedSeats = totalSeats - availableSeats;
        if (seats <= bookedSeats) {
            availableSeats += seats;
            System.out.println(seats + " tickets cancelled for " + movieName);
        } else {
            System.out.println("You cannot cancel more than booked tickets for " + movieName);
        }
    }
    void displayMovieDetails() {
        System.out.println("Movie: " + movieName);
        System.out.println("Total Seats: " + totalSeats);
        System.out.println("Available Seats: " + availableSeats);
        System.out.println("Ticket Price: " + ticketPrice);
    }
}
public class MovieBookingSystem {
    public static void main(String[] args) {
        Movie m1 = new Movie("Dhurander", 100, 600);
        Movie m2 = new Movie("KGF", 80, 500);
        Movie m3 = new Movie("Animal", 120, 300);

        m1.bookTicket(56);
        m1.cancelTicket(2);

        m2.bookTicket(55);
        m2.cancelTicket(5);

        m3.bookTicket(65);
        m3.cancelTicket(2);

        System.out.println("Movie Details:");
        m1.displayMovieDetails();
        m2.displayMovieDetails();
        m3.displayMovieDetails();
    }
}
