# 🏆 Event & Project Submission Management System (Angular 20.1.3)

A modern web-based platform built with **Angular 20.1.3** that allows **organizers** to host events, manage registrations, approve/reject project submissions, and declare winners — all in one interactive dashboard.

This project was developed as part of an **academic assignment** to demonstrate real-world use of **Angular concepts**, **API integration**, and **responsive UI design**.



---


| Page | Description |
|------|--------------|
| 🏠 Home Page | Hero section and overview of the platform |
| 🧍 Register Page | User registration with form validation |
| 🏁 Register Event | Organizer creates new hackathon event |
| 📊 Dashboard | Real-time statistics of users, events, and submissions |
| 📂 Project Submissions | Approve/Reject/View submissions dynamically |



---

## 🎯 Features

✅ **User Registration & Login System**  
- Separate forms for new users and existing users  
- Input validation with visual feedback  

✅ **Event Management**  
- Organizers can create new events  
- API-based event listing and management  

✅ **Project Submission Tracking**  
- Approve, reject, or view submitted projects  
- Displays total, approved, rejected, and pending submissions  

✅ **Admin Dashboard**  
- Real-time statistics for users, competitions, and submissions  
- Dynamic values fetched via API  

✅ **Responsive & Animated UI**  
- Built using **Bootstrap**, **Animate.css**, and **Font Awesome**  
- Professional modern dark-themed design  

---

## 🧱 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **Angular 20.1.3** | Frontend framework |
| **TypeScript** | Logic and type safety |
| **HTML5 / CSS3 / Bootstrap** | UI design and responsiveness |
| **Animate.css** | UI animations |
| **Font Awesome** | Icons |
| **Mock API / JSON Server / Backend API** | Data fetching and submission handling |

---

---

## 🧩 Angular Concepts Used

| Concept | Description | Example |
|----------|--------------|----------|
| **Data Binding** | Connects template and logic | `{{dashboardData.totalUsers}}` |
| **Event Binding** | Calls methods on user actions | `(click)="onLogin()"` |
| **Two-way Binding** | Syncs model and view | `[(ngModel)]="registerObj.email"` |
| **Directives** | Dynamic DOM rendering | `*ngIf`, `*ngFor` |
| **Routing** | Navigates between pages | `/dashboard`, `/events` |
| **Service & Dependency Injection** | Reusable logic, API handling | `ApiService` |
| **HttpClient** | Fetching API data | `this.http.get('/api/users')` |
| **Animations & Hover Effects** | User-friendly experience | Animate.css transitions |

---

## 🔗 API Integration

The system fetches and updates data using Angular’s **HttpClient module**.

Example (in `service/api.service.ts`):
```typescript
getDashboardData(): Observable<any> {
  return this.http.get('https://your-api-url.com/dashboard');
}



