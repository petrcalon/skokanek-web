import { useState, useEffect } from 'react';
import { Registration, FormData } from './types';
import { COURSES } from './constants';

const STORAGE_KEY = 'skokanek_registrations_v2';

// Base seed counts representing other children in groups to make it look realistic (out of individual course capacities)
export const COURSE_BASE_OCCUPANCY: Record<string, number> = {
  skokanci: 9,  // Capacity 15 (9 + approved = spots changing)
  klokanci: 13, // Capacity 18
  sportaci: 15, // Capacity 20
  divky: 11     // Capacity 16
};

const MOCK_REGISTRATIONS: Registration[] = [
  {
    id: 'REG-2026-004',
    courseId: 'skokanci',
    childName: 'Tobiáš Malý',
    childBirthDate: '2021-04-12',
    parentName: 'Jana Malá',
    email: 'jana.mala@example.cz',
    phone: '+420 732 111 222',
    note: 'Má mírnou alergii na včelí bodnutí, s sebou nosí lék.',
    registeredAt: '2026-05-15T14:23:00Z',
    status: 'approved',
    price: 2450
  },
  {
    id: 'REG-2026-003',
    courseId: 'klokanci',
    childName: 'Nikola Dvořáková',
    childBirthDate: '2020-09-05',
    parentName: 'Martina Dvořáková',
    email: 'dvorakova.martina@email.cz',
    phone: '+420 605 999 888',
    note: 'Bez zdravotních omezení. Velmi se těší na klokany!',
    registeredAt: '2026-05-20T09:15:00Z',
    status: 'approved',
    price: 2600
  },
  {
    id: 'REG-2026-002',
    courseId: 'sportaci',
    childName: 'Kryštof Müller',
    childBirthDate: '2017-02-28',
    parentName: 'Rudolf Müller',
    email: 'muller.r@seznam.cz',
    phone: '+420 777 444 333',
    note: 'Astma při vysoké zátěži – má s sebou sprej.',
    registeredAt: '2026-06-01T18:10:00Z',
    status: 'pending',
    price: 2800
  },
  {
    id: 'REG-2026-001',
    courseId: 'divky',
    childName: 'Sofie Nováková',
    childBirthDate: '2018-08-16',
    parentName: 'Barbora Nováková',
    email: 'b.novakova@seznam.cz',
    phone: '+420 721 555 666',
    note: 'Tancuje moc ráda doma, velmi společenská.',
    registeredAt: '2026-06-03T11:42:00Z',
    status: 'approved',
    price: 2550
  }
];

export const getStoredRegistrations = (): Registration[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(MOCK_REGISTRATIONS));
    return MOCK_REGISTRATIONS;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    return MOCK_REGISTRATIONS;
  }
};

export const saveStoredRegistrations = (registrations: Registration[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(registrations));
  }
};

export const useRegistrationsStore = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);

  useEffect(() => {
    setRegistrations(getStoredRegistrations());
  }, []);

  const addRegistration = (formData: FormData): Registration => {
    const course = COURSES.find(c => c.id === formData.courseId);
    const price = course ? course.price : 2500;
    
    // Generate a unique nice identifier
    const randSuffix = Math.floor(100 + Math.random() * 900);
    const newId = `REG-2026-${randSuffix}`;
    
    const newReg: Registration = {
      ...formData,
      id: newId,
      registeredAt: new Date().toISOString(),
      status: 'pending',
      price
    };
    
    const updated = [newReg, ...registrations];
    setRegistrations(updated);
    saveStoredRegistrations(updated);
    return newReg;
  };

  const updateRegistrationStatus = (id: string, status: 'pending' | 'approved' | 'cancelled') => {
    const updated = registrations.map(reg => {
      if (reg.id === id) {
        return { ...reg, status };
      }
      return reg;
    });
    setRegistrations(updated);
    saveStoredRegistrations(updated);
  };

  const deleteRegistration = (id: string) => {
    const updated = registrations.filter(reg => reg.id !== id);
    setRegistrations(updated);
    saveStoredRegistrations(updated);
  };

  // Helper to calculate vacancies left in courses
  const getCourseOccupancy = (courseId: string) => {
    const course = COURSES.find(c => c.id === courseId);
    if (!course) return { total: 15, occupied: 0, left: 15 };
    
    // Count active registrations in this course (exclude cancelled)
    const activeRegsCount = registrations.filter(
      r => r.courseId === courseId && r.status !== 'cancelled'
    ).length;
    
    const baseOccupied = COURSE_BASE_OCCUPANCY[courseId] || 0;
    const totalOccupied = Math.min(course.capacity, baseOccupied + activeRegsCount);
    const left = Math.max(0, course.capacity - totalOccupied);
    
    return {
      total: course.capacity,
      occupied: totalOccupied,
      left
    };
  };

  return {
    registrations,
    addRegistration,
    updateRegistrationStatus,
    deleteRegistration,
    getCourseOccupancy
  };
};
